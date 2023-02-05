import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private httpClient: HttpClient) {}

  getBlogs() {
    return this.httpClient.get(environment.apiUrl + 'fetch_blogs/');
  }
  getBlog(id: string) {
    return this.httpClient.get(environment.apiUrl + 'fetch_blog/' + id);
  }
  addBlog(data: any) {
    return this.httpClient.post(environment.apiUrl + 'add_blog', data);
  }
}
