import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { fromEvent, map, merge, Observable, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  init() {
    this.swipe(
      zip(
        this.getX(
          fromEvent<TouchEvent>(this.document, 'touchstart'),
          fromEvent<MouseEvent>(this.document, 'mousedown')
          ),
        this.getX(
          fromEvent<TouchEvent>(this.document, 'touchend'),
          fromEvent<MouseEvent>(this.document, 'mouseup')
        )
      )
    ).subscribe(direction => {
      if (direction < 0) {
        console.log('swipe left');
        return
      } else if (direction > 0) {
        console.log('swipe right');
        return
      }
      
    })
  }

  private getX(source1$: Observable<TouchEvent>, source2$: Observable<MouseEvent>): Observable<any> {
    return merge(source1$, source2$).pipe(
      map((event: MouseEvent | TouchEvent) => {
        if (event instanceof TouchEvent) {
          return event.changedTouches[0].clientX;
        } 
        return event.clientX
      })
    )
  }

  private swipe(source$: Observable<[number, number]>) {
    return source$.pipe(
      map(([x, y]) => x - y)
    )
  }
}
