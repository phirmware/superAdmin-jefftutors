import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  loading = false;

  constructor(private route: ActivatedRoute, private service: DetailsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getCourseDetails();
    });
  }

  getCourseDetails() {
    this.loading = true;
    this.service.getCourseDetails(this.id).subscribe(response => {
      console.log(response);
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading = false;
    });
  }

}
