import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, bufferCount, shareReplay, share, distinctUntilChanged, exhaustMap, concatAll, concatMap, mergeAll, mergeMap, switchMap, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom, reduce, takeUntil, catchError, throwError, BehaviorSubject, ReplaySubject, AsyncSubject, ConnectableObservable, timer, animationFrameScheduler, takeWhile } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjs';
  @ViewChild('block') block!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const div = this.block.nativeElement as HTMLDivElement;
    this.animationWave(div).subscribe({
      complete: () => console.log('completed')
    })
  }

  animationWave(element: HTMLDivElement) {
    return this.duration(20000)
    .pipe(
      map(this.animationFn),
      map(this.distance(100)),
      tap(frame => element.style.transform = `translate3d(0, ${frame}px, 0)`)
    )
  }

  private msElapsed(schedule = animationFrameScheduler) {
    return defer(() => {
      const start = schedule.now()

      return interval(0, animationFrameScheduler)
      .pipe(
        map(() => schedule.now() - start)
      )
    })
  }

  private duration(ms: number, schedule = animationFrameScheduler) {
    return this.msElapsed(schedule)
    .pipe(
      map(time => time / ms),
      takeWhile(percentage => percentage <= 1)
    )
  }

  private distance(px: number) {
    return (percentage: number) => percentage * px;
  }

  private animationFn(percentage: number) {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
  }
}
