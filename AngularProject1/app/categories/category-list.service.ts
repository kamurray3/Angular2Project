import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {IJordanCategory} from './jordancategory';

@Injectable()
export class CategoryListService {
    private _categoryUrl = 'api/categories/categories-data.json';

    //Constructor
    constructor(private _http: Http) {}

    //name: getCategories
    getCategories(): Observable<IJordanCategory[]>  {
        console.log("%c-----------------------","color: green; font-weight: bold");
        console.log("%cCategoryListService:", "color: green; font-weight: bold");
        console.log("%c-----------------------","color: green; font-weight: bold");
        
        console.log("getCategories method called!");

        return this._http.get(this._categoryUrl)
            .map((response: Response) => this.extractAllCategories(response))
            .catch(this.handleError);

    } //end of getCategories() method

    //===========================
    //PRIVATE METHODS:
    //===========================

    //name: handleError
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    } //end of handleError
    
    //name:  extractAllCategories
    private extractAllCategories(res: Response){
        console.log("extractAllCategories method called!");
      
        var returnedArray = <IJordanCategory[]> res.json();
        console.dir(returnedArray);

        //Sort by CatName property
        var sortedArray: IJordanCategory[] = returnedArray.sort((a,b) => {
                if( a.CatName.toUpperCase() < b.CatName.toUpperCase()) return -1;
                else if (a.CatName.toUpperCase() > b.CatName.toUpperCase()) return 1;
                else return 0;
        });
        console.log("sortedArray: ");
        console.table(sortedArray);

        return sortedArray;
        
    } //end of extractAllCategories


} //end of class