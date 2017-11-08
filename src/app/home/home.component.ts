import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './../services/todo.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  userList:any;
  constructor(private todoService:TodoService){}

  ngOnInit(){
    this.todoService.getUsers().subscribe(data =>{
      this.userList = data;
    })
  };
}