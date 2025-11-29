import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

// Ionic standalone imports
import {
  IonContent,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonIcon,
  IonMenuButton,
  IonButtons,
  IonMenuToggle,
  MenuController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [
    IonContent,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
   
  ]
})
export class DashboardPage {

  private menuCtrl = inject(MenuController);

  constructor(private router: Router) {}

  go(path: string) {
    this.menuCtrl.close(); // cerrar menú antes de navegar
    this.router.navigate([path]);
  }

  openMenu() {
    this.menuCtrl.open();
  }
}
