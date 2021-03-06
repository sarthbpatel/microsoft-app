import { Component, OnInit } from "@angular/core";
import { mock_product_item_forbusiness } from "./forbusiness/forbusiness_mock_product_item";
import { ProductItemModelForBusiness } from "./forbusiness/forbusiness_product_item_model";
import { ProductService } from "./home.services";
import { mock_product_item_link } from "./links/links_mock_product_item";
import { ProductItemModelLink } from "./links/links_product_item_model";
import { mock_product_item_surface } from "./surface-cards/surfacecard_mock_product_item";
import { ProductItemModelSurface } from "./surface-cards/surfacecard_product_item_model";


@Component ({
    selector: 'ms-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
  products: ProductItemModelSurface[] = [];
  links: ProductItemModelLink[] = [];
  forbusiness: ProductItemModelForBusiness[] = [];
  products_forbusiness: ProductItemModelForBusiness[] = [];

    constructor(private service: ProductService) {
      for (var product of mock_product_item_surface) {
      console.log(product);
      this.products.push(product);
      }

      for (var link of mock_product_item_link) {
      console.log(link);
      this.links.push(link);
      }

    }
  ngOnInit(): void {
    console.log("Fetch data");
    this.service.getProducts().subscribe(data => {
      console.log(data);
      for(var product of data) {
        this.forbusiness.push(product);
      }
    })
  }
    
  
}