import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: string[] = [];
  @Output() deleteTodoEvent = new EventEmitter<number>();

  deleteTodo(index: number) {
    this.deleteTodoEvent.emit(index);
  }
}
