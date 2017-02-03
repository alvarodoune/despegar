import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes, RouterLink} from '@angular/router';

import { AppComponent } from './app.component';
import {
  AdministrationModule,
  DeleteDeliveryComponent,
  DeliverysComponent,
  DeliveryDetailComponent,
  DeliveryServiceService
} from "./administration/administration.module";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export {HomeComponent};
export {PageNotFoundComponent};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'detail', component: DeliveryDetailComponent},
  {
    path: 'delivery',
    children: [
      {
        path: "",
        component: DeliverysComponent
      },
      {
        path: ':id',
        component: DeliverysComponent
      }
    ]
  },
  {path: 'delete', component: DeleteDeliveryComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeliverysComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AdministrationModule
  ],
  providers: [DeliveryServiceService],
  bootstrap: [AppComponent],
  schemas: [
  ]
})
export class AppModule { }
