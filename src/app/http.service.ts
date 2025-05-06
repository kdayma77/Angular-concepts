import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://jsonplaceholder.typicode.com/posts"

  getData() {
    // this.http.get(this.baseUrl,{headers: {
    //   'Content-type': 'application/json; charset=UTF-8',
    // }}).subscribe(res => {
    //   console.log(res)
    // })
  }
}
