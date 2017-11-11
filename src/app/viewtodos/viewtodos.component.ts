import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'viewtodos',
  templateUrl: './viewtodos.component.html',
  styleUrls:['viewtodos.style.css']
})
export class ViewTodosComponent implements OnInit{
  todoList:any;
  newtodo:string;
  selectedUserId:number;
  newtodotitle:string;
  
  constructor(private todoService:TodoService, private route: ActivatedRoute){}
  
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.selectedUserId = params['id'];
      this.todoService.getTodos(this.selectedUserId).subscribe(data =>{
        this.todoList = data;
      }) 
   });
  };

  updateTodo(){
    this.todoService.updateTodo(this.todoList).subscribe(data =>{
      
    });
  };

  addTodo(){
    let newtodo = {
      userId: this.selectedUserId,
      id: this.todoList.length + 1,
      title: this.newtodotitle,
      completed: false
    }
    this.todoService.addTodo(newtodo).subscribe(data =>{
      
    });
  };

  deleteTodo(id){
    this.todoService.deleteTodo(id).subscribe(data =>{
      
    });
  }
}
