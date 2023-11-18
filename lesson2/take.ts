import { interval, take } from "rxjs";

const sourceObservable = interval(500);

    // Use the take operator to take the first 5 emitted values
    const takenObservable = sourceObservable.pipe(
      take(5)
    ).subscribe(value => console.log(value))