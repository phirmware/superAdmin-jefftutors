import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationProperties } from 'src/app/lib/nav-interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  courseName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  beforeNavigationProperties() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.courseName = params['name'];
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
        title: this.courseName,
        route: '/courses/course',
        queryParams: {
          id: this.id,
          name: this.courseName
        }
      },
      {
        back: true,
        title: 'Edit',
      }
    ];
      return navProperties;
  }

}
