import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';
import { ToDo } from 'src/app/ToDo';
@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit{
  @Input() todo: ToDo = new ToDo;
  @Input() i! :number;
  @Output() todoDelete: EventEmitter<ToDo>  = new EventEmitter();
  @Output() toDoItemDone: EventEmitter<ToDo> = new EventEmitter();
  constructor(){}

  ngOnInit(): void {
  }
  Delete(todo : ToDo){
    this.todoDelete.emit(todo);
    console.log("delete event triggered")
  }
  StatusChange(todo : ToDo)
  {

    this.toDoItemDone.emit(todo);

  }
}
