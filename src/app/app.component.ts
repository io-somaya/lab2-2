import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';


import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';



@Component({
  selector: 'app-root',
  imports: [  TodoWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
