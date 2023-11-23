import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, exhaustMap, concatAll, concatMap, mergeAll, mergeMap, switchMap, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjs';

  constructor() {}

  ngOnInit(): void {
    const source$ = interval(1000).pipe(take(3));
    const inner$ = of('A', 'B', 'C'); // Inner observable

    const result$ = source$.pipe(
      tap(value => console.log('Superior observable: ', value)),
      exhaustMap(() => inner$)
    );

    result$.subscribe(value => {
      console.log(value);
    });
  }

  ngAfterViewInit(): void {
    
  }
}
