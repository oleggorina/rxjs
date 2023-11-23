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
    const source$ = of(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9));

    const result$ = source$.pipe(concatAll());

    result$.subscribe(value => {
      console.log(value);
});
  }

  ngAfterViewInit(): void {
    
  }
}
