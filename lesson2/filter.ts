import { filter, of } from "rxjs";

const sourceObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    // Use the filter operator to only pass through even numbers
    const filteredObservable = sourceObservable.pipe(
      filter(number => number % 3 === 0)
    ).subscribe(value => console.log(value))