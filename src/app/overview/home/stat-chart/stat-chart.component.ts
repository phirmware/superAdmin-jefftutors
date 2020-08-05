import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-stat-chart',
  templateUrl: './stat-chart.component.html',
  styleUrls: ['./stat-chart.component.css']
})
export class StatChartComponent implements OnInit, OnChanges {

  @ViewChild(ChartComponent) chart: ChartComponent;
  @Input() numberOfCourses;
  @Input() numberOfCustomers;
  @Input() numberOfSubscriptions;

  type = 'pie';
  data = {
    labels: ['Number Of Courses', 'Number Of Customers', 'Number of Subscriptions'],
    datasets: [
      {
        label: 'StudyKrib Stats',
        data: [this.numberOfCourses, this.numberOfCustomers, this.numberOfSubscriptions],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        // borderColor: [
        //   ...this.generateArr(3)
        // ],
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {}

}
