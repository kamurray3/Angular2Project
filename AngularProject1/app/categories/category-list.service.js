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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var CategoryListService = (function () {
    //Constructor
    function CategoryListService(_http) {
        this._http = _http;
        this._categoryUrl = 'api/categories/categories-data.json';
    }
    //name: getCategories
    CategoryListService.prototype.getCategories = function () {
        var _this = this;
        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("%cCategoryListService:", "color: green; font-weight: bold");
        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("getCategories method called!");
        return this._http.get(this._categoryUrl)
            .map(function (response) { return _this.extractAllCategories(response); })
            .catch(this.handleError);
    }; //end of getCategories() method
    //===========================
    //PRIVATE METHODS:
    //===========================
    //name: handleError
    CategoryListService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    }; //end of handleError
    //name:  extractAllCategories
    CategoryListService.prototype.extractAllCategories = function (res) {
        console.log("extractAllCategories method called!");
        var returnedArray = res.json();
        console.dir(returnedArray);
        //Sort by CatName property
        var sortedArray = returnedArray.sort(function (a, b) {
            if (a.CatName.toUpperCase() < b.CatName.toUpperCase())
                return -1;
            else if (a.CatName.toUpperCase() > b.CatName.toUpperCase())
                return 1;
            else
                return 0;
        });
        console.log("sortedArray: ");
        console.table(sortedArray);
        return sortedArray;
    }; //end of extractAllCategories
    return CategoryListService;
}()); //end of class
CategoryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoryListService);
exports.CategoryListService = CategoryListService;
//# sourceMappingURL=category-list.service.js.map