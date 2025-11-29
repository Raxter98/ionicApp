import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Ionic Standalone imports
import {
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetime
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonDatetime
  ]
})
export class RegisterPage {

  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate(['/login']);
  }

}
