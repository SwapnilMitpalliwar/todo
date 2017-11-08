import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersResolver } from './services/users.service';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, resolve: {users: UsersResolver} },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [UsersResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
