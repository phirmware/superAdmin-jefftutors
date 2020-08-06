import { Component, OnInit, Input } from '@angular/core';
import { PathnameService } from 'src/app/shared/services/pathname.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  @Input() courses: any;
  panelOpenState = false;
  COURSE_DETAILS_PATH: string;

  constructor(private pathNameService: PathnameService) { }

  ngOnInit() {
    this.COURSE_DETAILS_PATH = this.pathNameService.COURSES_PATH.course;
  }

}
