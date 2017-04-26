import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { CategoryListComponent } from './categories/category-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
             { path: 'products/:ProductCategoryCode', component: ProductListComponent },
             { path: 'products', component: ProductListComponent },
             { path: 'product/:ItemStyleNum', component: ProductDetailComponent },
             { path: 'welcome', component: WelcomeComponent },
             { path: 'categories', component: CategoryListComponent },  
             
                     
             { path: '', redirectTo: 'categories', pathMatch: 'full' }
            // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            // { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
    ],
    declarations: [
                    AppComponent,
                    WelcomeComponent,
                    CategoryListComponent,
                    ProductListComponent,
                    ProductDetailComponent
                  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }