import {Component, OnInit} from '@angular/core';

import {Product} from './product-item';
import {ProductService} from '../services/product.service';

@Component({
    templateUrl: 'index.component.html'
})

export class ProductComponent implements OnInit{
    private products: Product[];

    constructor(
        private productService: ProductService
    ) {}


    ngOnInit () {
        this.products = this.productService.findAll();
    }
}