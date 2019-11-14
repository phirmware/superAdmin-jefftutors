import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'overview';
  showFiller = false;

  constructor(private router: Router) {}

  navigate(header: string) {
    this.title = header;
    this.router.navigate([`${header}`]);
  }
}
