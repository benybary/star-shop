
import { Component, OnInit } from '@angular/core';
import {Product} from '../product-item/product-item';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myListProducts: Product[] = [];

  
  

  

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    const studObserve = this.productService.getProducts();
    studObserve.subscribe((studData: Product[]) => {this.myListProducts = studData;
    })
    ;
  }
  title = 'MyObservable';

    
  }
  
