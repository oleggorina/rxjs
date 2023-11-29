import { Injectable } from '@angular/core';
import { Observable, concatMap, map, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {

  constructor() { }

  dragDrop(mousedown$: Observable<MouseEvent>, mouseup$: Observable<MouseEvent>, mousemove$: Observable<MouseEvent>) {
    return mousedown$.pipe(
      concatMap(startEvent => {
        return mousemove$.pipe(
          map(moveEvent => {
            moveEvent.preventDefault();
            return {
              left: moveEvent.clientX - startEvent.offsetX,
              top: moveEvent.clientY - startEvent.offsetY
            }
          }),
          takeUntil(mouseup$)
        );
      })
    )
  }
}
