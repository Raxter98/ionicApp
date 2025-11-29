import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage {

  constructor(
    private router: Router,
    private menu: MenuController
  ) {}

  go(path: string) {
    this.router.navigate([path]);
  }

  openMenu() {
    this.menu.open();
  }
}
