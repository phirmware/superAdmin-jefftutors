import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  @Input() courses: any;
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
