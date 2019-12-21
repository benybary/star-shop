import {Product} from '../product-item/product-item';
import {ProductService} from 'services/ProductService'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lstProducts: Product[];

  constructor() { }

  ngOnInit() {
  }

}
