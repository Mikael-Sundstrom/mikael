import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JsonPipe, DatePipe } from '@angular/common';
import { routerTransition } from '../../../core/router.animation';

interface UserResponse {
  apiKey: string;
  blogger: string;

  kind: string;
  items: Array<string>;
  etag: string;

  id: string;
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  title: string;
  content: string;
  labels: Array<string>;
}

@Component({
  selector: 'app-blogger-feed',
  templateUrl: './blogger-feed.component.html',
  styles: [],
  animations: [routerTransition()]
})
export class BloggerFeedComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition;

  data: UserResponse;
  apiKey = '?key=AIzaSyC7Fv7-hRfD3GNRMJWDNqRd7aqWyvOIu28';
  blogger = 'https://www.googleapis.com/blogger/v3/blogs/1461454481515513020';
  posts = '/posts';
  pages = '/pages';
  comments = '/comments';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<UserResponse>(this.blogger + this.posts + this.apiKey).subscribe(
      data => {
        console.log(data);
        this.data = data;
      },
      (errorHandler: HttpErrorResponse) => {
        if (errorHandler.error instanceof Error) {
          console.log('Client-side error occured');
        } else {
          console.log('Server-side error occured');
        }
      }
    );
  }
}
