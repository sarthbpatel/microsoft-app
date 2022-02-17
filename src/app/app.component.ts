import { Component } from '@angular/core';
import { mock_product_item_forbusiness } from './For Business/mock_product_item';
import { ProductItemModelForBusiness } from './For Business/product_item_model';
import { mock_product_item_link } from './links/mock_product_item';
import { ProductItemModelLink } from './links/product_item_model';
import { mock_product_item_surface } from './surface/mock_product_item';
import { ProductItemModelSurface } from './surface/product_item_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microsoft-app';
  
  
}
