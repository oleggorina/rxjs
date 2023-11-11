import { ElementRef, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";

export class FromEvent {
  @ViewChild('btn') btn!: ElementRef;

  clickObservable = fromEvent(this.btn.nativeElement, 'click');
  subscription = this.clickObservable.subscribe((event: any) => {
    console.log('Button clicked!', event);
  });
}