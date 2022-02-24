import { Component, Input } from "@angular/core";
import { ProductItemModelXboxLink } from "./xbox_product_item_model";
import { mock_product_item_XboxLink } from "./xbox_mock_product_item";
@Component ({
    selector: "ms-xbox",
    templateUrl: "xbox.component.html",
    styleUrls: ['xbox.component.css']

})
export class XboxComponent {
    @Input() img: String;
    @Input() link: String;

    xboximages = mock_product_item_XboxLink.map(image => new ProductItemModelXboxLink(image.img, image.link))

    constructor() {
        this.img = "";
        this.link = "";
    }

}