import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-codelist',
  templateUrl: './codelist.component.html',
  styleUrls: ['./codelist.component.css']
})
export class CodelistComponent implements OnInit {

  @Input() codes: any[];
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
