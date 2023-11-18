import { fromEvent, debounceTime } from "rxjs";

const clickObservable = fromEvent(this.btn.nativeElement, 'click');

    // Use debounceTime to wait for a 300ms pause in clicks
    const debouncedObservable = clickObservable.pipe(
      debounceTime(500)
    ).subscribe(value => console.log(value))
  }