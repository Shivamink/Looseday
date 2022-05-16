import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-student-page1',
  templateUrl: './student-page1.component.html',
  styleUrls: ['./student-page1.component.css'],
})
export class StudentPage1Component implements OnInit {
  faClock = faClock;
  constructor() {}

  ngOnInit(): void {}
}
