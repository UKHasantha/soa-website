import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Itemservice } from './services/itemservice';
import { CardComponent } from './card/card.component';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CardComponent,
    SignComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
     
  ],
  providers: [
    Itemservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
