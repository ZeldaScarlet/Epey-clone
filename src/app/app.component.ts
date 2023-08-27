import { Component } from '@angular/core';
import Devices from "src/assets/devices.json"; 
import { Phones } from 'src/app/models/category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epey-clone';
  x: any = Devices;
  CellPhones: Phones[] = this.x.PhoneModels;
}
