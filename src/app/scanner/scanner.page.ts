import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RequestItemComponent } from '../../components/request-item/request-item.component';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [IonicModule, CommonModule, RequestItemComponent],
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss']
})
export class ScannerPage {
  requests = [
    {
      photo: 'https://i.pravatar.cc/150?img=15',
      name: 'Luz',
      role: 'Lawyer',
      rating: 3.5,
      description: 'I am a expert',
    },
    {
      photo: 'https://i.pravatar.cc/150?img=30',
      name: 'María',
      role: 'Legal administrative assistant',
      rating: 3.5,
      description: 'everything you want I do',
    },
    {
      photo: 'https://i.pravatar.cc/150?img=1',
      name: 'Pablo',
      role: 'Legal technician',
      rating: 4.5,
      description: 'I can handle everything quickly',
    },
  ];
}
