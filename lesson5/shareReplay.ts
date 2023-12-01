import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, bufferCount, shareReplay, share, distinctUntilChanged, exhaustMap, concatAll, concatMap, mergeAll, mergeMap, switchMap, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom, reduce, takeUntil, catchError, throwError, BehaviorSubject, ReplaySubject, AsyncSubject, ConnectableObservable } from 'rxjs';
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
    const source = interval(1000).pipe(
      take(5),
      shareReplay(2) // The argument (2) specifies the buffer size
    );
    
    source.subscribe(value => console.log(`Subscriber 1: ${value}`));
    
    // After 3 seconds, a new subscriber comes in
    setTimeout(() => {
      source.subscribe(value => console.log(`Subscriber 2: ${value}`));
    }, 3000);
  }

  ngAfterViewInit(): void {
    
  }
}
