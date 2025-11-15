import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage {
  constructor(private router: Router) {}

  go(path: string) {
    this.router.navigate([path]);
  }
}
