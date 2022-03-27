import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/home.services';
import { ProductItemModelForBusiness } from '../forbusiness_product_item_model';

@Component({
  selector: 'ms-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
  }
  
  addProduct(product:ProductItemModelForBusiness) {

    this.ps.addProduct(product);
  }
}
