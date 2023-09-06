import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/Iproducts';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
prdList:IProduct[];
  constructor() {
   this.prdList = [
      { id: 100, name: 'LenovoThinkpad laptop', price: 100000000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
      { id: 200, name: 'Apple MacBook laptop', price: 2007780, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
      { id: 300, name: 'Lenovo Tab 2', price: 3000, quantity: 10, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
      { id: 400, name: 'Samsung Tab', price: 40.5, quantity: 2, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
      { id: 500, name: 'Smasung Note 10', price: 50000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
      { id: 600, name: 'Samsung S22 Utlra', price: 600, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 }
    ];
   }

  ngOnInit(): void{
  }

}
