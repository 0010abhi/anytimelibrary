import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module'


import { AppComponent } from './app.component';
import { BookDetailTileComponent } from './book-detail-tile/book-detail-tile.component';
import { BookDetailUserComponent } from './book-detail-user/book-detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailTileComponent,
    BookDetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
