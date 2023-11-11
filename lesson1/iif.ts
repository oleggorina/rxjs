import { iif, of } from "rxjs";

const condition = false;
    const observable = iif(
      () => condition,
      of('Observable if true'),
      of('Observable if false')
    );
    
    observable.subscribe(value => {
      console.log(value);
    });