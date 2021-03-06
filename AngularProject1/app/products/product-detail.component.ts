import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import {IJordanProduct} from './jordanproduct';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IJordanProduct;
    errorMessage: string;
    private sub: Subscription;


    constructor(private _route: ActivatedRoute,
                private _router: Router
                ) {
    }

    ngOnInit(): void {
        console.log("product-list.component OnInit called!");

        var ProductID: string;

        this.sub = this._route.params.subscribe(
            params => {
                ProductID = params['ItemStyleNum'];

                //TODO: not sure why id is a number!
                // productID = id.toString();
                console.log("itemStyleNum = " + ProductID);
            
                //Lookup and set the selected product
                this.getProduct(ProductID);

            });
    }

        ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id:string) {
                console.log("getProduct function called!");
        // this._productService.getProduct(id).subscribe(
        //     product => this.product = product,
        //     error => this.errorMessage = <any>error);

        var unsortedArray: IJordanProduct[]  =  
            [
                {
                "ItemStyleNum": "546480012",
                "ProductName": "Jordan Dri-Fit Low Quarter",
                "ProductDescription": "The Jordan Dri-FIT Low Quarter Basketball Socks (Medium/3 Pair) are made with a half-cushion terry foot and Dri-FIT fabric that lifts sweat away from your feet for optimal comfort on the court.",
                "ProductPrice": 20.00,
                "ProductCategoryCode": 4,
                "ImageFile": "Low_Quarter_Socks.jpg"
            },
            {
                "ItemStyleNum": "589042695",
                "ProductName": "Air Jordan Jumpman Dri-Fit Crew",
                "ProductDescription": "The Air Jordan Jumpman Dri-FIT Crew Socks are made with sweat-wicking fabric to help keep your feet dry and comfortable, and strategic cushioning for impact protection.",
                "ProductPrice": 18.00,
                "ProductCategoryCode": 4,
                "ImageFile": "Dri_Fit_Crew.jpg"
            },
            {
                "ItemStyleNum": "619352695",
                "ProductName": "Jumpman Wristbands",
                "ProductDescription": "The Jordan Jumpman Wristbands are made with durable stretch fabric and a world-renowned hoops logo for a custom fit and legendary look.",
                "ProductPrice": 10.00,
                "ProductCategoryCode": 1,
                "ImageFile": "Jordan_Wristbands.jpg"
            },
            {
                "ItemStyleNum": "642210010",
                "ProductName": "Jordan Jumpman Flight Crew",
                "ProductDescription": "The Jordan Jumpman Flight Crew Socks are made with Dri-FIT fabric and ventilated mesh to help keep your feet cool and dry. Zonal cushioning provides plush comfort and impact protection.",
                "ProductPrice": 20.00,
                "ProductCategoryCode": 4,
                "ImageFile": "Flight_Crew_Socks.jpg"
            },
            {
                "ItemStyleNum": "658396066",
                "ProductName": "Jordan Jumpman",
                "ProductDescription": "The Jordan Jumpman Backpack features an interior laptop sleeve and spacious compartments for versatile storage and organization.",
                "ProductPrice": 65.00,
                "ProductCategoryCode": 1,
                "ImageFile": "Jordan_Bookbag.jpg"
            },
            {
                "ItemStyleNum": "683331011",
                "ProductName": "Jordan Elephant Print High-Quarter",
                "ProductDescription": "The Jordan Elephant Print High-Quarter Socks features allover graphics inspired by a hoops icon and stretchy fabric for lasting comfort.",
                "ProductPrice": 16.00,
                "ProductCategoryCode": 4,
                "ImageFile": "Ele_Socks.jpg"
            },
            {
                "ItemStyleNum": "688525010",
                "ProductName": "Jordan Flight Fleece",
                "ProductDescription": "The Jordan Flight Fleece Outdoor Full-Zip Men's Basketball Hoodie is made for playing on the outdoor court with Therma-FIT fabric that helps keep out the cold and body-mapping seams for a full range of motion.",
                "ProductPrice": 100.00,
                "ProductCategoryCode": 5,
                "ImageFile": "Flight_Fleece.jpg"
            },
            {
                "ItemStyleNum": "706607687",
                "ProductName": "Jordan Scarf",
                "ProductDescription": "The Jordan Scarf features a dynamic pattern and iconic detail on soft fabric for style and cozy comfort.",
                "ProductPrice": 60.00,
                "ProductCategoryCode": 1,
                "ImageFile": "Jordan_Scarf.jpg"
            },
            {
                "ItemStyleNum": "706733687",
                "ProductName": "Jordan Pocket Tee",
                "ProductDescription": "The Jordan Pocket Men's T-Shirt is made with premium slub jersey and a bonded pocket for comfort and convenience wherever you go.",
                "ProductPrice": 45.00,
                "ProductCategoryCode": 5,
                "ImageFile": "Pocket_Tee.jpg"
            },
            {
                "ItemStyleNum": "706896687",
                "ProductName": "Jordan Jumpman Ele Camo Dri-Fit",
                "ProductDescription": "The Jordan Jumpman Ele Camo Dri-FIT Men's T-Shirt delivers a premium hoops look and feel with a burnout mesh graphic and soft, sweat-wicking fabric.",
                "ProductPrice": 40.00,
                "ProductCategoryCode": 5,
                "ImageFile": "Ele_Camo.jpg"
            },
            {
                "ItemStyleNum": "717074010",
                "ProductName": "Jordan Ultimate Flight Hybrid",
                "ProductDescription": "The Jordan Ultimate Flight Hybrid Men's Jacket is designed to keep you comfortable and moving freely on the court in cold, wet conditions with water-repellent fabric and body-mapping seams.",
                "ProductPrice": 150.00,
                "ProductCategoryCode": 5,
                "ImageFile": "Ulimate_Flight.jpg"
            },
            {
                "ItemStyleNum": "724495032",
                "ProductName": "Air Jordan Flight",
                "ProductDescription": "The Air Jordan Flight Men's Pants is designed with brushed Dri-FIT fabric and ergonomic seams at the knees for a soft touch and natural range of motion. Zip hems offer custom ventilation and let you change easily over shoes.",
                "ProductPrice": 90.00,
                "ProductCategoryCode": 2,
                "ImageFile": "Air_Jordan_Flight_Pants.jpg"
            },
            {
                "ItemStyleNum": "724723010",
                "ProductName": "Jordan AJ XII Pocket",
                "ProductDescription": "The Jordan AJ XII Pocket Men's T-Shirt celebrates a premium shoe with allover graphics on pure cotton.",
                "ProductPrice": 45.00,
                "ProductCategoryCode": 5,
                "ImageFile": "Air_Jordan_XII.jpg"
            },
            {
                "ItemStyleNum": "724725687",
                "ProductName": "Jordan Ele 3.0",
                "ProductDescription": "The Jordan Ele 3.0 Men's Basketball Shorts feature Dri-FIT mesh fabric for ventilated comfort during intense competition.",
                "ProductPrice": 50.00,
                "ProductCategoryCode": 2,
                "ImageFile": "Ele_Shorts.jpg"
            },
            {
                "ItemStyleNum": "724893013",
                "ProductName": "Jordan 4",
                "ProductDescription": "The Jordan 4 Adjustable Hat features a snapback closure and a flat-brim profile for personalized comfort and a premium look.",
                "ProductPrice": 35.00,
                "ProductCategoryCode": 1,
                "ImageFile": "Jordan_4.jpg"
            },
            {
                "ItemStyleNum": "724930100",
                "ProductName": "Jordan Seasonal Print",
                "ProductDescription": "The Jordan Seasonal Print Crew Socks deliver incredible comfort and support with soft cotton-blend fabric and arch compression.",
                "ProductPrice": 16.00,
                "ProductCategoryCode": 4,
                "ImageFile": "Seasonal_Print_Socks.jpg"
            },
            {
                "ItemStyleNum": "776462021",
                "ProductName": "Jordan Elephant Print Fleece",
                "ProductDescription": "The Jordan Elephant Print Fleece Men's Shorts are made with soft fabric and ergonomic panels to help keep you warm, comfortable and moving freely.",
                "ProductPrice": 37.50,
                "ProductCategoryCode": 2,
                "ImageFile": "Ele_Print_Shorts.jpg"
            },
            {
                "ItemStyleNum": "799547687",
                "ProductName": "Jordan Flight Diamond Rise",
                "ProductDescription": "The Jordan Flight Diamond Rise Men’s Basketball Shorts are made with sweat-wicking fabric and laser-cut perforations at the side panels to help keep you dry and to offer ventilated comfort on the court. ",
                "ProductPrice": 65.00,
                "ProductCategoryCode": 2,
                "ImageFile": "Diamond_Rise_Shorts.jpg"
            },
            {
                "ItemStyleNum": "812870101",
                "ProductName": "Jordan Super.Fly 4 Jacquard",
                "ProductDescription": "The Jordan Super.Fly 4 Jacquard Men's Shoe features a lightweight, one-piece upper and low-profile cushioning for comfort and impact protection. Webbed straps integrate with the laces for extra stability and lockdown.",
                "ProductPrice": 175.00,
                "ProductCategoryCode": 3,
                "ImageFile": "Jordan_Superfly.jpg"
            },
            {
                "ItemStyleNum": "819953010",
                "ProductName": "Air Jordan Sky High OG",
                "ProductDescription": "The Air Jordan Sky High OG Men's Shoe borrows elements from the Air Jordan 1 and adds a canvas upper for lightweight comfort and a retro hoops look.",
                "ProductPrice": 110.00,
                "ProductCategoryCode": 3,
                "ImageFile": "Air_Jordan_Sky.jpg"
            },
            {
                "ItemStyleNum": "820245001",
                "ProductName": "Jordan Flight Origin 3",
                "ProductDescription": "Jordan Flight Origin 3 Men's Shoe delivers iconic style with off-court versatility, made with Jordan design details on a premium nubuck upper. Deep flex grooves and a visible Air-Sole unit in the heel give you a natural feel and lightweight cushioning.",
                "ProductPrice": 120.00,
                "ProductCategoryCode": 3,
                "ImageFile": "Jordan_Flight.jpg"
            },
                        {
                "ItemStyleNum": "820255403",
                "ProductName": "Jordan Galaxy",
                "ProductDescription": "The Jordan Galaxy Men's Shoe is made with a vintage high-top hoops profile featuring premium leather upper and elevated details. Soft foam cushioning creates lightweight comfort and a natural feel.",
                "ProductPrice": 135.00,
                "ProductCategoryCode": 3,
                "ImageFile": "Jordan_Galaxy.jpg"
            },
                        {
                "ItemStyleNum": "822575100",
                "ProductName": "Jordan AJ All Season Compression",
                "ProductDescription": "The Jordan AJ All Season Compression Three-Quarter Men's Training Tights are made with snug-fitting, Dri-FIT fabric for a locked-in feel. Flat, ergonomic seams deliver enhanced range of motion and reduced distractions during your workout.",
                "ProductPrice": 50.00,
                "ProductCategoryCode": 2,
                "ImageFile": "AJ_Compression.jpg"
            },
                        {
                "ItemStyleNum": "828224010",
                "ProductName": "Jordan ASG Cuffed",
                "ProductDescription": "The Jordan ASG Cuffed (Toronto 2016) Knit Hat pays homage to the game's greatest while keeping you warm with soft knit fabric and a cuffed design.",
                "ProductPrice": 35.00,
                "ProductCategoryCode": 1,
                "ImageFile": "Jordan_Beanie.jpg"
            },
                        {
                "ItemStyleNum": "839115600",
                "ProductName": "Air Jordan 1 Retro High",
                "ProductDescription": "The Air Jordan 1 Retro High Men's Shoe celebrates the original with premium detail on a combination leather upper. A cupsole construction with an encapsulated Air-Sole unit provides soft cushioning.",
                "ProductPrice": 140.00,
                "ProductCategoryCode": 3,
                "ImageFile": "Air_Jordan_1.jpg"
                }
            ];    
            console.log("unsortedArray: ");
            console.table(unsortedArray);

            //Get selected product
            var selectedProduct =
                unsortedArray.find(p => p.ItemStyleNum == id);
            console.dir(selectedProduct);

            //Set this found ProductID
            this.product = selectedProduct;

    } //end of getProduct funtion

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }

}