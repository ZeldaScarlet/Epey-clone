import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() picture = "";
  @Input() brand_name = "";
  @Input() model_name = "";
  @Input() price = "";
  @Input() gpu = "";
  @Input() cpu = "";
  @Input() screen_size = "";
  @Input() screen_resolution = "";
  @Input() category = "";
  @Input() ram = "";
  @Input() storage = "";
  @Input() battery = "";
  


}
