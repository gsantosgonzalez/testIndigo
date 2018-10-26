import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { Exercise2Component } from './components/exercise2/exercise2.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'exercise1',
    component: Exercise1Component,
    data: { title: 'Ejercicio 1' },
  },
  {
    path: 'exercise2',
    component: Exercise2Component,
    data: { title: 'Ejercicio 2' },
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Exercise1Component,
    Exercise2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
