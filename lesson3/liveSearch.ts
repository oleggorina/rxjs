import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { defer, distinctUntilChanged, exhaustMap, concatAll, concatMap, mergeAll, mergeMap, switchMap, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray, skip, take, debounceTime, tap, zip, merge, combineLatest, startWith, withLatestFrom, reduce } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GithubItemInterface, GitHubResponseInterface } from '../src/app/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjs';
  @ViewChild('input') input!: ElementRef;
  responseData: GithubItemInterface[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const sequence$ = fromEvent<InputEvent>(this.input.nativeElement, 'input');

    sequence$.pipe(
      debounceTime(500),
      map((e: Event) => (e.target as HTMLInputElement).value.trim()),
      filter(value => value.length > 3),
      distinctUntilChanged(),
      switchMap(value => {
        return this.http.get<GitHubResponseInterface>(`https://api.github.com/search/repositories?q=${value}`)
        .pipe(
          map(res => res.items)
        )
      })
    ).subscribe(res => this.responseData = res)
  }
}
