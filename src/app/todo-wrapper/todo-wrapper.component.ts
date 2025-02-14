import { Component } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFormComponent } from './../todo-form/todo-form.component';


@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
  todos: string[] = [];

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
