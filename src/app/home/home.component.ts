import { Component, OnInit } from '@angular/core';
import {Product} from '../product-item/product-item';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lstProducts: Product[];
  

  

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[])=>{
      this.lstProducts = data;
    })
  }

}
