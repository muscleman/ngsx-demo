import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  //https://mocki.io/fake-json-api
  endpoint = "https://mocki.io/v1/9761e4e6-7ff4-4e2d-9751-fc447b2003c7"
  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<User[]> {
		return this.httpClient.get<User[]>(this.endpoint)
	}
}
