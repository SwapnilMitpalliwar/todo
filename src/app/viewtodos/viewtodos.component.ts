import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'viewtodos',
  templateUrl: './viewtodos.component.html'
})
export class ViewTodosComponent implements OnInit{
  todoList:any;
  
  constructor(private todoService:TodoService, private route: ActivatedRoute){}
  
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.todoService.getTodos(params['id']).subscribe(data =>{
        this.todoList = data;
      }) 
   });
  };
  
}