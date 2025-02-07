import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @Output() addTodoEvent = new EventEmitter<string>();
  todoText: string = '';

  addTodo() {
    if (this.todoText.trim()) {
      this.addTodoEvent.emit(this.todoText);
      this.todoText = ''; // Clear the input after adding
    }
  }

  onInputChange(event: Event) {
    this.todoText = (event.target as HTMLInputElement).value;
  }
}
