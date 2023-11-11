import { Observable } from "rxjs";

const observable = new Observable(observer => {
  observer.next(1); // Emit a value
  observer.next(2); // Emit another value
  observer.next(3); // Emit another value
  observer.complete(); // Signal that the observable has completed
});

observable.subscribe(value => {
  console.log(value);
});