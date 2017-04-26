import { Component } from '@angular/core';

import { IJordanCategory } from './jordancategory';
import { CategoryListService } from './category-list.service';


@Component({
    selector: 'pm-categories',
    templateUrl: 'app/categories/category-list.component.html',
    providers: [ CategoryListService ]
})
export class CategoryListComponent {
    pageTitle: string = 'Jordan Categories';
    categories: IJordanCategory[];
    errorMessage: string;

    //Constructor
     constructor(private _categoryService: CategoryListService) {
    }

    //ngOnInit
   ngOnInit(): void {
        console.log("%c-----------------------","color: blue; font-weight: bold");
        console.log("%cCategoryListComponent", "color: blue; font-weight: bold");
        console.log("%c-----------------------","color: blue; font-weight: bold");

        console.log("ngOnInit function called!");
        
        this._categoryService
                .getCategories()
                    .subscribe(
                            data => this.categories = data,
                            error => this.errorMessage = <any>error,
                    );

    } //end of ngOnInit

} //end of class