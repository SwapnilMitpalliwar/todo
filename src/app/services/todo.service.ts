import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}
  public getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  public getTodos(id){
    return this.http.get('https://jsonplaceholder.typicode.com/todos',{params: {userId:id}});
  }
  public updateTodo(list){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  public deleteTodo(id){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  public addTodo(todo){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
