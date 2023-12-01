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
    const source = of(1, 2, 3, 4, 5);

    source.pipe(
      toArray()
    )
    .subscribe(array => console.log(array));
  }

  ngAfterViewInit(): void {
    
  }
}
