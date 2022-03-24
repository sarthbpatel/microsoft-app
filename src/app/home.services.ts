import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { ProductItemModelForBusiness } from "./forbusiness/forbusiness_product_item_model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private db:AngularFireDatabase) {

    }

    public getProducts() {
        return this.db.list<ProductItemModelForBusiness>("ForBusinessproducts").valueChanges();
    }

    public getProduct(index:number) {
        return this.db.list("forbusiness", ref => ref.orderByChild("price").startAt(10)).valueChanges();
    }
}
