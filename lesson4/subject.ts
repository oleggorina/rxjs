import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, bufferCount, distinctUntilChanged, exhaustMap, concatAll, concatMap, mergeAll, mergeMap, switchMap, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom, reduce, takeUntil, catchError, throwError, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
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
    const subject = new Subject<number>();
    subject.subscribe(data => console.log('Observer 1: ', data));
    subject.next(1); // Observer 1: 1
    subject.next(2); // Observer 1: 2
    subject.subscribe(data => console.log('Observer 2: ', data));
    subject.next(3);

    const behaviorSubject = new BehaviorSubject<number>(0);
    behaviorSubject.subscribe(data => console.log('Observer 1: ', data)); // Observer 1: 0
    behaviorSubject.next(1); // Observer 1: 1
    behaviorSubject.next(2); // Observer 1: 2
    behaviorSubject.subscribe(data => console.log('Observer 2: ', data)); // Observer 2: 2
    behaviorSubject.next(3); // Observer 1: 3, Observer 2: 3

    const replaySubject = new ReplaySubject<number>(2);
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.subscribe(data => console.log('Observer 1: ', data)); // Observer 1: 2, Observer 1: 3
    replaySubject.next(4); // Observer 1: 4

    const asyncSubject = new AsyncSubject<number>();
    asyncSubject.subscribe({
      next: value => console.log('Observer 1: ', value),
      complete: () => console.log('Observer 1 completed'),
    });
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    // Even though values were emitted, nothing is printed yet
    asyncSubject.subscribe({
      next: value => console.log('Observer 2: ', value),
      complete: () => console.log('Observer 2 completed'),
    });
    // Nothing is printed yet
    asyncSubject.complete(); // Completing the subject
  }

  ngAfterViewInit(): void {
    
  }
}
