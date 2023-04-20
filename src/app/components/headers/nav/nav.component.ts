import {Component, Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input()todo: string = 'Add Todo';
  @Output() addTodo = new EventEmitter();
  addTodofunc() {
    this.addTodo.emit();
  }
}
