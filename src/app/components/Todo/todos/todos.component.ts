import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todo: Todo = new Todo();
  @Output() removeTodo = new EventEmitter();
  complete(){
      this.todo.completed = !this.todo.completed;
  };

  ngOnInit() {
  }
  constructor() {
  }
  remove() {
    this.removeTodo.emit(this.todo);
  }
}
