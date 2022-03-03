import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModelForBusiness } from "./forbusiness/forbusiness_product_item_model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl: string = 'https://app-eb37c-default-rtdb.firebaseio.com/';
    private productsEndPoint: string = 'ForBusinessproducts.json';

    constructor(private http:HttpClient) {

    }

    public getProducts() {
        return this.http.get<ProductItemModelForBusiness[]>(this.baseUrl + this.productsEndPoint);
    }

    public getProduct(index:number) {
        return this.http.get<ProductItemModelForBusiness>(this.baseUrl + 'products/' + index + '.json');
    }
}