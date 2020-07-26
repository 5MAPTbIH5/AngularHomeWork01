import { Component } from '@angular/core';
import { Resume } from '../models/Resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  resume: Resume = new Resume;
}
