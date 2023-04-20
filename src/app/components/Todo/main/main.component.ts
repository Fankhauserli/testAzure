import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../../Todo";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() removeTodo = new  EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  removeTodofunc($event: Todo) {
    this.removeTodo.emit($event);
  }
}
