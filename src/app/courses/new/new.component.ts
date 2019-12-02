import { Component, OnInit } from '@angular/core';
import { NavigationProperties } from 'src/app/lib/nav-interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Courses',
        route: '/courses/list'
      },
      {
        back: true,
        title: 'Add Course',
      }
    ];
      return navProperties;
  }

  ngOnInit() {
  }

}
