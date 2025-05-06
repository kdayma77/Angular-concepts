import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postsSubject = new BehaviorSubject<any[]>([]);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  

  constructor(private http: HttpClient,) {}

  // Fetch data and update the subject
  fetchPosts(): void {
    
    this.http.get<any[]>(this.apiUrl).subscribe(posts => {
      this.postsSubject.next(posts);
    });
  }

  // Expose the subject as an observable
  get posts$(): Observable<any[]> {
    return this.postsSubject.asObservable();
  }
}
