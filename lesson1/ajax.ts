import { ajax } from 'rxjs/ajax';

ajax('https://jsonplaceholder.typicode.com/posts').subscribe(value => console.log(value.response))