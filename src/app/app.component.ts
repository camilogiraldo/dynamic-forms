import { MockForm } from './shared/mock/mock-form';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = MockForm;
  title = 'dynamic-forms';
}
