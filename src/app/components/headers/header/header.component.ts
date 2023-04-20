import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() addTodo = new EventEmitter();
  @Input() todo:string = 'Add Todo';
    constructor() { }
  addTodofunc() {
    this.addTodo.emit();
  }
}
