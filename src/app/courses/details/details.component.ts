import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationProperties } from 'src/app/lib/nav-interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  loading = false;
  course: any;
  videos: any[];

  constructor(private route: ActivatedRoute, private service: DetailsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getCourseDetails();
    });
  }

  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Courses',
        route: '/courses/list'
      },
      {
        back: true,
        title: 'Details',
      }
    ];
      return navProperties;
  }

  getCourseDetails() {
    this.loading = true;
    this.service.getCourseDetails(this.id).subscribe(response => {
      this.course = response;
      this.videos = this.course.course_content;
      this.loading = false;
      console.log(this.videos);
    }, (error: HttpErrorResponse) => {
      this.loading = false;
    });
  }

}
