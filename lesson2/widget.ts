import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjs';
  @ViewChild('quality') quality!: ElementRef;
  @ViewChild('rating') rating!: ElementRef;
  @ViewChild('actual') actual!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const quality$ = this.getValue(fromEvent<InputEvent>(this.quality.nativeElement, 'input'))
    const rating$ = this.getValue(fromEvent<InputEvent>(this.rating.nativeElement, 'input'))
    const actual$ = this.getValue(fromEvent<InputEvent>(this.actual.nativeElement, 'input'))
    const btn$ = fromEvent<PointerEvent>(this.btn.nativeElement as HTMLButtonElement, 'click')
    
    const sliderSequence$ = combineLatest([quality$, rating$, actual$])
    .pipe(
      debounceTime(500),
      map(([q, r, a]) => Math.round((q + r + a) / 3))
    )
    sliderSequence$.subscribe(value => {
      console.log(value)
    })

    btn$.pipe(
      withLatestFrom(sliderSequence$)
    )
    .subscribe(([_e, value]) => console.log(value))
  }

  getValue(source$: Observable<InputEvent>): Observable<number> {
    return source$.pipe(
      map(({target}: Event) => +(target as HTMLInputElement).value),
      startWith(50)
    )
  }
  
  setClass(value: string): string {
    return +value < 40 ? 'bad' : +value < 70 ? 'warn' : 'good'
  }
}
