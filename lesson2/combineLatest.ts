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
    const observable1$ = of('A', 'B', 'C');
    const observable2$ = of('X', 'Y', 'Z');

    const combined$ = combineLatest([observable1$, observable2$])
    .subscribe(value => console.log(value))
  }

  ngAfterViewInit(): void {
    
  }
}
