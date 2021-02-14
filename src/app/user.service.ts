import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUsersResp(){

    return this.http.get("http://jsonplaceholder.typicode.com/users");
  
  }
}
