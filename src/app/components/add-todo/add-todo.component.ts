import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() submit = new EventEmitter();
  form: FormGroup;
  itemName = '';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      done: false
    });
  }
  onSubmit(): void {
    // Process checkout data here
    this.submit.emit(this.form.value);
  }
}
