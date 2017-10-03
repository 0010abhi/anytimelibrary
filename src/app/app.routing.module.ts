import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes, NavigationEnd, ActivatedRoute, Router } from '@angular/router';

//User-Defined Components 
import { AppComponent } from './app.component';
// import { BookDetailTileComponent } from './book-detail-tile/book-detail-tile.component'
// import { BookDetailUserComponent } from './book-detail-user/book-detail-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login',  component: LogInComponent },
    { path: 'user',  component: UserPanelComponent },
    { path: 'admin', component: AdminPanelComponent }
  ];
   
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{ }
