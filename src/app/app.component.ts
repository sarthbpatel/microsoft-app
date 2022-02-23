import { Component } from '@angular/core';
import { mock_product_item_forbusiness } from './homepage/forbusiness_mock_product_item';
import { ProductItemModelForBusiness } from './homepage/forbusiness_product_item_model';
import { mock_product_item_link } from './homepage/links_mock_product_item';
import { ProductItemModelLink } from './homepage/links_product_item_model';
import { mock_product_item_surface } from './homepage/surfacecard_mock_product_item';
import { ProductItemModelSurface } from './homepage/surfacecard_product_item_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microsoft-app';
  
  
}
