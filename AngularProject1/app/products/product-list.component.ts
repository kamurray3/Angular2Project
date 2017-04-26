import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import {IJordanProduct} from './jordanproduct';
import { ProductService } from './products-service';


@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    providers: [ ProductService ]
})
export class ProductListComponent {
    private sub: Subscription;
    products: IJordanProduct[];
    errorMessage: string;
 
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {}

    ngOnInit(): void {
        console.log("%c-----------------------","color: blue; font-weight: bold");
        console.log("%cProductListComponent", "color: blue; font-weight: bold");
        console.log("%c-----------------------","color: blue; font-weight: bold");
        console.log("ngOnInit function called!");

        var categoryID: number;

        //Get incoming category code from querystring
        this.sub = this._route.params.subscribe(
            params => {

                //Note: the + in front of params converts CatCode to numeric!!!
                // Leave that + off if you want to treat an incoming value as a string!
                categoryID = +params['CatCode'];
            }
        );
        console.log("categoryID = " + categoryID);

        //If there is NO incoming category id: show all products
        if (isNaN(categoryID)) {
            
            this._productService
                    .getProducts()
                        .subscribe(
                                data => this.products = data,
                                error => this.errorMessage = <any>error,
            );
        //Else there IS an Incoming category id: show only inventory in category
        } else {
           
            this._productService
                    .getProductsByCategory(categoryID)
                        .subscribe(
                                data => this.products = data,
                                error => this.errorMessage = <any>error,
            );
        }
        console.table(this.products);

    } //end of ngOnInit

} //end of component class
