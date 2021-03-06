import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { currencyReducer } from './store/currency/currency.reducer'
import { PurchaseablesComponent } from './purchaseables/purchaseables.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CurrencyComponent } from './currency/currency.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseablesComponent,
    NavbarComponent,
    CurrencyComponent,
    ProfileComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: currencyReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
