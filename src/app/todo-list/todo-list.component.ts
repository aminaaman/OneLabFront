import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'app';
  newTodo: string;
  todos: any;
  todoObj: any;

  constructor() { }

  ngOnInit() {
    this.newTodo = '';
    this.todos = [];
  }
  onBtnClick(event){
    console.log(event);
  }
  addTodo(event){
    console.log(event);
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo='';
  }

}
