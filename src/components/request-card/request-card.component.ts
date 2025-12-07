import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent {
  @Input() category!: string;
  @Input() tag!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() tasks!: number;
  @Input() totalTasks!: number;
  @Input() date!: string;
  @Input() userName!: string;
  @Input() userRate!: number;
  @Input() userAvatar!: string;
}
