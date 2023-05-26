import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit{
  title = 'TODO LIST';
  localItem : string;
  todos: ToDo[] = [];
  constructor(){
    this.localItem = localStorage.getItem("todos")!;
    if(this.localItem == null)
    {
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
  }
  ToDoItemDelete(todo : ToDo)
  {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1)
      localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  ToDoItemAdd(todo: ToDo)
  {
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  ToDoItemStatusChange(todo: ToDo)
  {
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
