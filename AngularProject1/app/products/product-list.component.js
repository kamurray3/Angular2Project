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
var router_1 = require("@angular/router");
var products_service_1 = require("./products-service");
var ProductListComponent = (function () {
    function ProductListComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("%cProductListComponent", "color: blue; font-weight: bold");
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("ngOnInit function called!");
        var categoryID;
        //Get incoming category code from querystring
        this.sub = this._route.params.subscribe(function (params) {
            //Note: the + in front of params converts CatCode to numeric!!!
            // Leave that + off if you want to treat an incoming value as a string!
            categoryID = +params['CatCode'];
        });
        console.log("categoryID = " + categoryID);
        //If there is NO incoming category id: show all products
        if (isNaN(categoryID)) {
            this._productService
                .getProducts()
                .subscribe(function (data) { return _this.products = data; }, function (error) { return _this.errorMessage = error; });
            //Else there IS an Incoming category id: show only inventory in category
        }
        else {
            this._productService
                .getProductsByCategory(categoryID)
                .subscribe(function (data) { return _this.products = data; }, function (error) { return _this.errorMessage = error; });
        }
        console.table(this.products);
    }; //end of ngOnInit
    return ProductListComponent;
}()); //end of component class
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        templateUrl: 'app/products/product-list.component.html',
        providers: [products_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        products_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map