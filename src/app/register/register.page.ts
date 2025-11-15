import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate(['/login']);
  }
}
