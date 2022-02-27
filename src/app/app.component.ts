import { Component } from '@angular/core';
import { mock_product_item_link } from './links/links_mock_product_item';
import { mock_product_item_forbusiness} from './forbusiness/forbusiness_mock_product_item';
import { ProductItemModelForBusiness } from './forbusiness/forbusiness_product_item_model';
import { ProductItemModelLink } from './links/links_product_item_model';
import { mock_product_item_surface } from './surface-cards/surfacecard_mock_product_item';
import { ProductItemModelSurface } from './surface-cards/surfacecard_product_item_model';
import { mock_product_item_XboxLink } from './navigation-bars/topnavbar/topnavbar_routing/xbox/xbox_mock_product_item';
import { ProductItemModelXboxLink } from './navigation-bars/topnavbar/topnavbar_routing/xbox/xbox_product_item_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microsoft-app';
  
  
}
