import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom } from 'rxjs';
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
    const source$ = of('A', 'B', 'C');
    const another$ = of('X', 'Y', 'Z');

    source$.pipe(
      withLatestFrom(another$)
    ).subscribe(([valueFromSource, latestValueFromAnother]) => {
      console.log(valueFromSource, latestValueFromAnother);
    });
  }

  ngAfterViewInit(): void {
    
  }
}
