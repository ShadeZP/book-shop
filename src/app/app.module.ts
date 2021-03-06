import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CartModule,
    BooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
