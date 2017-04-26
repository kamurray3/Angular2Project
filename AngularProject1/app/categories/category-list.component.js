"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var category_list_service_1 = require("./category-list.service");
var CategoryListComponent = (function () {
    //Constructor
    function CategoryListComponent(_categoryService) {
        this._categoryService = _categoryService;
        this.pageTitle = 'Jordan Categories';
    }
    //ngOnInit
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("%cCategoryListComponent", "color: blue; font-weight: bold");
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("ngOnInit function called!");
        this._categoryService
            .getCategories()
            .subscribe(function (data) { return _this.categories = data; }, function (error) { return _this.errorMessage = error; });
    }; //end of ngOnInit
    return CategoryListComponent;
}()); //end of class
CategoryListComponent = __decorate([
    core_1.Component({
        selector: 'pm-categories',
        templateUrl: 'app/categories/category-list.component.html',
        providers: [category_list_service_1.CategoryListService]
    }),
    __metadata("design:paramtypes", [category_list_service_1.CategoryListService])
], CategoryListComponent);
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=category-list.component.js.map