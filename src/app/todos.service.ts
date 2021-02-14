import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http : HttpClient) { }

  getTodosResp(){
    return this.http.get("http://jsonplaceholder.typicode.com/todos");
  }
}
