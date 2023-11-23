import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, concatAll, mergeAll, mergeMap, switchMap, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom } from 'rxjs';
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
    const source$ = of(1, 2, 3);

    // Use switchMap to project each value into an inner observable
    // and switch to the most recently emitted inner observable
    const result$ = source$.pipe(
      switchMap(value => interval(1000).pipe(take(3), map(innerValue => `${value}: ${innerValue}`)))
    );

    // Subscribe to the resulting observable
    result$.subscribe(result => {
      console.log(result);
    });
  }

  ngAfterViewInit(): void {
    
  }
}
