import { Component } from '@angular/core';
import {Todo} from "./Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo:string = 'Add Todo';
  todos: Todo[] = [{
    id: 1,
    title: 'Learn Angular',
    completed: false
  },
    {
      id: 2,
      title: 'Learn React',
      completed: false
    }];

  showAddTodo: boolean= false;
  addTodo() {
    this.todo ==='Add Todo'? this.todo = 'Close': this.todo = 'Add Todo';
    this.showAddTodo = !this.showAddTodo;
  }

  submitAddTodo($event: any) {
    this.todo ==='Add Todo'? this.todo = 'Close': this.todo = 'Add Todo';
    this.showAddTodo = !this.showAddTodo;
    let newTodo:Todo = {
      id: this.todos.length === 0? 1:this.todos[this.todos.length-1].id  +1,
      title: $event.name,
      completed: $event.done
    }
    this.todos.push(newTodo);
  }

  removeTodo($event: any) {
      this.todos = this.todos.filter(todo => todo !== $event);
  }
}
