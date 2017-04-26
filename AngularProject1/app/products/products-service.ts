import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {IJordanProduct} from './jordanproduct';

@Injectable()
export class ProductService {
    private _productsUrl = 'api/products/jordanproducts.json';

    //Constructor
    constructor(private _http: Http) {}

    //name: getProducts
    getProducts(): Observable<IJordanProduct[]>  {
        console.log("%c-----------------------","color: green; font-weight: bold");
        console.log("%cProductService:", "color: green; font-weight: bold");
        console.log("%c-----------------------","color: green; font-weight: bold");       
        console.log("getProducts method called!");

       return this._http.get(this._productsUrl)
                    .map((response: Response) => this.extractAllProducts(response))
                    .catch(this.handleError);

    } //end of getProducts() method

   //name:getProductsByCategory
    getProductsByCategory(chosenCategory: number): Observable<IJordanProduct[]>  {
        console.log("%c-----------------------","color: green; font-weight: bold");
        console.log("%cProductService:", "color: green; font-weight: bold");
        console.log("%c-----------------------","color: green; font-weight: bold");       
        console.log("getProductsByCategory method called!");

       return this._http.get(this._productsUrl)
                    .map((response: Response) => this.extractProductsInCategory(response, chosenCategory))
                    .catch(this.handleError);

    } //end of getProductsByCategory() method

    //===========================
    //PRIVATE METHODS:
    //===========================

    //name: handleError
    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    } //end of handleError

    //name:  extractAllProducts
    private extractAllProducts(res: Response){
        console.log("extractAllProducts method called!");
      
        var returnedArray = <IJordanProduct[]> res.json();
        console.dir(returnedArray);

        //Sort by Name property
        var sortedArray: IJordanProduct[] = returnedArray.sort((a,b) => {
                if( a.ProductName.toUpperCase() < b.ProductName.toUpperCase()) return -1;
                else if (a.ProductName.toUpperCase() > b.ProductName.toUpperCase()) return 1;
                else return 0;
        });
        console.log("sortedArray: ");
        console.table(sortedArray);

        return sortedArray;
        
    } //end of extractAllProducts

   //name:  extractProductsInCategory
    private extractProductsInCategory(res: Response, categoryID: number){
        console.log("extractProductsInCategory method called!");
        console.log("categoryID = " + categoryID);
      
        var returnedArray = <IJordanProduct[]> res.json();
        console.dir(returnedArray);

        var filteredArray: IJordanProduct[] =   returnedArray.filter(p => p.ProductCategoryCode == categoryID);
        console.log("filteredArray");
        console.table(filteredArray);

        //Sort by Name property
        var sortedArray: IJordanProduct[] = filteredArray.sort((a,b) => {
                if( a.ProductName.toUpperCase() < b.ProductName.toUpperCase()) return -1;
                else if (a.ProductName.toUpperCase() > b.ProductName.toUpperCase()) return 1;
                else return 0;
        });
        console.log("sortedArray: ");
        console.table(sortedArray);

        return sortedArray;
        
    } //end of extractProductsInCategory



} //end of class