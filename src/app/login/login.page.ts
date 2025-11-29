import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonInput,
    IonButton
  ]
})
export class LoginPage {

  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
