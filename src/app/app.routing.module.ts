import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes, NavigationEnd, ActivatedRoute, Router } from '@angular/router';

//User-Defined Components 
import { AppComponent } from './app.component';
// import { BookDetailTileComponent } from './book-detail-tile/book-detail-tile.component'
import { BookDetailUserComponent } from './book-detail-user/book-detail-user.component';

const routes: Routes = [
    { path: '', redirectTo: 'book', pathMatch: 'full' },
    { path: 'app',  component: AppComponent },
    { path: 'book',  component: BookDetailUserComponent }
  ];
   
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{ }
