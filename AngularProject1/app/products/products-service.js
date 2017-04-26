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
var ProductService = (function () {
    //Constructor
    function ProductService(_http) {
        this._http = _http;
        this._productsUrl = 'api/products/jordanproducts.json';
    }
    //name: getProducts
    ProductService.prototype.getProducts = function () {
        var _this = this;
        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("%cProductService:", "color: green; font-weight: bold");
        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("getProducts method called!");
        return this._http.get(this._productsUrl)
            .map(function (response) { return _this.extractAllProducts(response); })
            .catch(this.handleError);
    }; //end of getProducts() method
    //name:getProductsByCategory
    ProductService.prototype.getProductsByCategory = function (chosenCategory) {
        var _this = this;
        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("%cProductService:", "color: green; font-weight: bold");
        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("getProductsByCategory method called!");
        return this._http.get(this._productsUrl)
            .map(function (response) { return _this.extractProductsInCategory(response, chosenCategory); })
            .catch(this.handleError);
    }; //end of getProductsByCategory() method
    //===========================
    //PRIVATE METHODS:
    //===========================
    //name: handleError
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    }; //end of handleError
    //name:  extractAllProducts
    ProductService.prototype.extractAllProducts = function (res) {
        console.log("extractAllProducts method called!");
        var returnedArray = res.json();
        console.dir(returnedArray);
        //Sort by Name property
        var sortedArray = returnedArray.sort(function (a, b) {
            if (a.ProductName.toUpperCase() < b.ProductName.toUpperCase())
                return -1;
            else if (a.ProductName.toUpperCase() > b.ProductName.toUpperCase())
                return 1;
            else
                return 0;
        });
        console.log("sortedArray: ");
        console.table(sortedArray);
        return sortedArray;
    }; //end of extractAllProducts
    //name:  extractProductsInCategory
    ProductService.prototype.extractProductsInCategory = function (res, categoryID) {
        console.log("extractProductsInCategory method called!");
        console.log("categoryID = " + categoryID);
        var returnedArray = res.json();
        console.dir(returnedArray);
        var filteredArray = returnedArray.filter(function (p) { return p.ProductCategoryCode == categoryID; });
        console.log("filteredArray");
        console.table(filteredArray);
        //Sort by Name property
        var sortedArray = filteredArray.sort(function (a, b) {
            if (a.ProductName.toUpperCase() < b.ProductName.toUpperCase())
                return -1;
            else if (a.ProductName.toUpperCase() > b.ProductName.toUpperCase())
                return 1;
            else
                return 0;
        });
        console.log("sortedArray: ");
        console.table(sortedArray);
        return sortedArray;
    }; //end of extractProductsInCategory
    return ProductService;
}()); //end of class
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products-service.js.map