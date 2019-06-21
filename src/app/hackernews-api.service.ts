import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {

  baseUrl: string;

  constructor(private http: Http) {
  	this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

	getNews(storyType: string, page: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
                    .pipe(map((response: any) => response.json()));
	}

	getNewsItem(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/item/${id}`)
                    .pipe(map((response: any) => response.json()));
  }
}
