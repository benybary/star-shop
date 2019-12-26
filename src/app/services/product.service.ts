import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from "@angular/router"
import { from, Observable } from 'rxjs';
import {Product} from '../product-item/product-item'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  lstProducts: Product[] = [{
    
    product_SKU: 1,
    product_Name: 'classicChars',
    product_Description: 'Assorted',
    product_Price: 22,
    product_ImageSrc: 'classicChars'
  },
  {
    
    product_SKU: 2,
    product_Name: 'LEGO!',
    product_Description: 'Brick by brick',
    product_Price: 36,
    product_ImageSrc: 'lego'
  },
  {
    
    product_SKU: 3,
    product_Name: 'Red Trooper',
    product_Description: 'Better red than dead',
    product_Price: 15,
    product_ImageSrc: 'redTrooper'
  },
  {
    
    product_SKU: 4,
    product_Name: 'Vader',
    product_Description: 'Darth Vader + Friend',
    product_Price: 20,
    product_ImageSrc: 'vaderTrooper'
  }
  ]
   
  //uri = 'http://localhost:3000/product';

  // DI - Loosely Coupled
  constructor() {
   }

   public getProducts():any{
    const prodObserve = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.lstProducts)
      }, 1000)
    })
      return prodObserve;
  }
  }
   // Add new product to DB
  //  addProduct(product_Name, product_Description, product_SKU, product_Price, product_ImageSrc ){
  //    const myObj = {
  //      product_Name: product_Name,
  //      product_Description: product_Description,
  //      product_SKU: product_SKU,
  //      product_Price: product_Price,
  //      product_ImageSrc: product_ImageSrc

  //    };
     // Express -> Observable<T>
     // http.get().subscribe() <- Rule: http always "get" subscribe
  //    console.log('Working on Post....');
     
  //    this.http.post(`${this.uri}/add`, myObj).subscribe(res => {
  //      console.log('Add Done!');
  //      this.router.navigate(['product']);
  //    });
     
  //  }
  //  // Get list of all products
  //  getProducts(){
  //    return this.http.get(`${this.uri}`)
  //  }
  //  // Edit product by ID
  //  editProduct(id){
  //    //console.log('Edit Product');
  //    return this.http.get(`${this.uri}/edit/${id}`);
     
  //  }
  //  // Update product
  //  updateProduct(id, product_Name, product_Description, product_SKU ){
  //   const myObj = {
  //     product_Name: product_Name,
  //     product_Description: product_Description,
  //     product_SKU: product_SKU
  //   };
  //   this.http.post(`${this.uri}/update/${id}`, myObj).subscribe((res) => {
  //     console.log(res + 'Product Updated');
      
  //   });
  //  };

  //  // Delete Product
  //  deleteProduct(id){
  //  return this.http.get(`${this.uri}/delete/${id}`);
  //   }
 
  
