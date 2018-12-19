import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datacenter-scratch';

  @ViewChild (DashboardComponent) dashboard: DashboardComponent;

  refresh() {
    this.dashboard.generateData();
  }
}
