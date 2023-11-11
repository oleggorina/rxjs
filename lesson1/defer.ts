import { defer, of } from "rxjs"

defer(() => {
  return Math.random() > 0.5
  ? Math.random() > 0.8
    ? of('value > 0.8')
    : of('value < 0.8')
  : of('value <= 0.5')
}).subscribe(value => console.log(value))