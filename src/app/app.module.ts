import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {countri1} from './countri1/countri1.component'
import {HttpClientModule} from '@angular/common/http';
import { CountriService } from './countri.service';
import { HighlightDirective } from './highlight.directive';
import { UnderLineDirective } from './under-line.directive';

const appRoutes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'user' , component:UserComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    countri1,
    HighlightDirective,
    UnderLineDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CountriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
