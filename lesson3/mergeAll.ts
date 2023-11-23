import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, mergeAll, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom } from 'rxjs';
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
    const source$ = of(
      interval(1000).pipe(map(value => 'A' + value)),
      interval(1500).pipe(map(value => 'B' + value)),
      interval(1200).pipe(map(value => 'C' + value))
    );
    
    // Use mergeAll to flatten the inner observables into a single stream
    const merged$ = source$.pipe(mergeAll());
    
    // Subscribe to the merged observable
    merged$.subscribe(value => {
      console.log(value);
    });
  }

  ngAfterViewInit(): void {
    
  }
}
