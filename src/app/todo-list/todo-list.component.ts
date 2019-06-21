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
  deleteTodo(index){
    this.todos.splice(index, 1);
  }
  deleteSelectedTodos(){
    for(var i=(this.todos.length -1); i>-1; i--)
      if(this.todos[i].completed){
        this.todos.splice(i, 1);
      }
  }
}
