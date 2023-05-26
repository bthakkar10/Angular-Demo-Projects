import { Component, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = "";
  description: string = "";
  @Output() todoAdd : EventEmitter<ToDo>  = new EventEmitter();

  AddToDo(){
    const todo = {
      serialno: 1,
      title: this.title,
      desc:this.description,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
