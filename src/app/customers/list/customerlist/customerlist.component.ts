import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  @Input() dataSource: any;
  displayedColumns: string[] = ['username', 'email', 'phone', 'id'];

  constructor() { }

  ngOnInit() {
  }

}
