import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-item',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.scss'],
})
export class RequestItemComponent {
  @Input() photo!: string;
  @Input() name!: string;
  @Input() rating!: number;
  @Input() role!: string;
  @Input() description!: string;
}
