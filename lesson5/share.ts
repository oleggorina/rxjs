import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, bufferCount, share, distinctUntilChanged, exhaustMap, concatAll, concatMap, mergeAll, mergeMap, switchMap, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom, reduce, takeUntil, catchError, throwError, BehaviorSubject, ReplaySubject, AsyncSubject, ConnectableObservable } from 'rxjs';
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
    const source = interval(1000).pipe(take(5));
    // Use the share operator to create a multicast observable
    const sharedObservable = source.pipe(share());
    // Subscribe to the shared observable (it will automatically connect)
    const subscription1 = sharedObservable.subscribe(value => console.log('Subscriber 1: ', value));
    // Additional subscribers will also receive values
    const subscription2 = sharedObservable.subscribe(value => console.log('Subscriber 2: ', value));
  }

  ngAfterViewInit(): void {
    
  }
}
