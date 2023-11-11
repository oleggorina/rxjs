import { of } from "rxjs";

const observable = of(1, 2, 3);

    // Subscribe to the observable to receive the emitted values
    observable.subscribe(value => {
      console.log(value); // Will print 1, 2, 3
    });