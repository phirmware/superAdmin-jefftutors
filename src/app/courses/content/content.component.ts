import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CourseDetails } from 'src/app/shared/interfaces/course-details-request.interface';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { PathnameService } from 'src/app/shared/services/pathname.service';
import { DetailsService } from '../details/details.service';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public courseName: string;
  public id: string;
  public model = {
    editorData: ''
  };
  public Editor = ClassicEditor;
  public editorData: string;

  constructor(
    private service: ContentService,
    private route: ActivatedRoute,
    private courseDetailsService: DetailsService,
    private pathNameService: PathnameService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  beforeNavigationProperties() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.courseName = params['name'];
      this.getCourseDetails();
    });
  }

  getCourseDetails() {
    this.courseDetailsService.getCourseDetails(this.id).subscribe((response: CourseDetails) => {
      this.model.editorData = response.course_materials;
    }, (error) => {
      this.snackBar.open(error, 'close');
    });
  }

  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Courses',
        route: this.pathNameService.COURSES_PATH.list,
      },
      {
        back: true,
        title: this.courseName,
        route: this.pathNameService.COURSES_PATH.course,
        queryParams: {
          id: this.id,
          name: this.courseName
        }
      },
      {
        back: true,
        title: 'Materials',
      }
    ];
    return navProperties;
  }

  editCourseContent() {
    const courseData = {
      course_materials: this.model.editorData
    }

    this.service.updateCourseContent(this.id, courseData).subscribe(response => {
      this.snackBar.open('Updated Successfully', 'close');
    }, (error) => {
      console.log(error)
    })
  }

}
