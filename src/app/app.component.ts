import { Component } from '@angular/core';
import { mock_product_item_forbusiness } from './forbusiness_mock_product_item';
import { ProductItemModelForBusiness } from './forbusiness_product_item_model';
import { mock_product_item_link } from './links_mock_product_item';
import { ProductItemModelLink } from './links_product_item_model';
import { mock_product_item_surface } from './surfacecard_mock_product_item';
import { ProductItemModelSurface } from './surfacecard_product_item_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microsoft-app';
  
  
}
