import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { defer, filter, from, fromEvent, iif, interval, map, Observable, of, Subject, toArray } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjs';

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }
}
