import { interval, skip } from "rxjs";

const sourceObservable = interval(500);

    // Use the skip operator to skip the first 3 emitted values
    const skippedObservable = sourceObservable.pipe(
      skip(3)
    ).subscribe(value => console.log(value))