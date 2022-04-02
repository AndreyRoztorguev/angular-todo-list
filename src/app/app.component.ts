import { Component } from '@angular/core';
import { Todo } from './shared/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Angular todo application';
}
