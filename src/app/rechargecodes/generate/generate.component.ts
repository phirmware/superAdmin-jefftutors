import { Component, OnInit } from '@angular/core';
import { NavigationProperties } from '../../lib/nav-interface';
import { GenerateService } from './generate.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  responseArray: any;
  generatedCodes = [];
  loading = false;

  beforeNavigationProperties() {}
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Codes',
        route: '/'
      }
    ];
    return navProperties;
  }

  constructor(private service: GenerateService) {}

  ngOnInit() {
  }

  generateCodes() {
    this.loading = true;
    this.service.generateCodes().subscribe(_res => {
      this.responseArray = _res;
      this.addCodePeriodically();
    });
  }

  async addCodePeriodically() {
    for (let i = 0; i < this.responseArray.length; i++) {
      await this.addCodeToArray(i);
    }
    this.loading = false;
  }

  addCodeToArray(i: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.generatedCodes.push(this.responseArray[i]);
        console.log(this.generatedCodes);
        resolve('1');
      }, 3000);
    });
  }
}
