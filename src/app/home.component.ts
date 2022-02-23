import { Component } from "@angular/core";
import { mock_product_item_forbusiness } from "./homepage/forbusiness_mock_product_item";
import { ProductItemModelForBusiness } from "./homepage/forbusiness_product_item_model";
import { mock_product_item_link } from "./homepage/links_mock_product_item";
import { ProductItemModelLink } from "./homepage/links_product_item_model";
import { mock_product_item_surface } from "./homepage/surfacecard_mock_product_item";
import { ProductItemModelSurface } from "./homepage/surfacecard_product_item_model";

@Component ({
    selector: 'ms-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
  products: ProductItemModelSurface[] = [];
  links: ProductItemModelLink[] = [];
  forbusiness: ProductItemModelForBusiness[] = [];

    constructor() {
      for (var product of mock_product_item_surface) {
      console.log(product);
      this.products.push(product);
      }

      for (var link of mock_product_item_link) {
      console.log(link);
      this.links.push(link);
      }

      for (var forbusiness of mock_product_item_forbusiness) {
        console.log(forbusiness);
        this.forbusiness.push(forbusiness);

        
      }
    } 
  
}