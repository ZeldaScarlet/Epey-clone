import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Categories } from 'src/data';

@Component({
  selector: 'c-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  Category: Category[] = Categories;

}
