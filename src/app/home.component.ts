import { Component } from "@angular/core";
import { mock_product_item_forbusiness } from "./For Business/mock_product_item";
import { ProductItemModelForBusiness } from "./For Business/product_item_model";
import { mock_product_item_link } from "./links/mock_product_item";
import { ProductItemModelLink } from "./links/product_item_model";
import { mock_product_item_surface } from "./surface/mock_product_item";
import { ProductItemModelSurface } from "./surface/product_item_model";

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