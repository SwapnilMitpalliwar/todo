import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './home/home.component';
import { ViewTodosComponent } from './viewtodos/viewtodos.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from "clarity-angular";


@NgModule({
  declarations: [
    AppComponent, HomeComponent, ViewTodosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ClarityModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent},
        { path: 'viewtodos/:id', component: ViewTodosComponent},
        { path: '',   redirectTo: '/home', pathMatch: 'full' },
      ]
    )
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
