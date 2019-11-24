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
        title: 'Coures',
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
      console.log(response);
      this.course = response;
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading = false;
    });
  }

}
