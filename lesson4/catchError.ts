import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, bufferCount, distinctUntilChanged, exhaustMap, concatAll, concatMap, mergeAll, mergeMap, switchMap, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom, reduce, takeUntil, catchError, throwError } from 'rxjs';
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
    const source$ = throwError('This is an error!');

    const result$ = source$.pipe(
      catchError(error => {
        console.error(`Caught an error: ${error}`);
        // You can return another observable or a default value here
        return of('Default Value');
      })
    );

    result$.subscribe(
      value => console.log(`Received value: ${value}`),
      error => console.error(`Received error: ${error}`)
    );
  }

  ngAfterViewInit(): void {
    
  }
}
