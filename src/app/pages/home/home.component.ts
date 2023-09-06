import { Component } from '@angular/core';
import Devices from "src/assets/devices.json"; 
import { Phones, Product } from 'src/app/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  x: any = Devices;
  CellPhones: Product[] = this.x.PhoneModels;
  PCellPhones: Product[] = this.x.PopularPhoneModels;
  Products: Product[] = this.x.Default;
  PTV: Product[] = this.x.PopularTVs;

}
