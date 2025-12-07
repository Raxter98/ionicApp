import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RequestCardComponent } from '../../components/request-card/request-card.component'; // <-- ruta correcta

@Component({
  selector: 'app-pending-task',
  standalone: true,
  imports: [IonicModule, RequestCardComponent],   // <-- AGREGA AQUÍ
  templateUrl: './pending-task.page.html',
  styleUrls: ['./pending-task.page.scss'],
})
export class PendingTaskPage {}
