import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { HttpClientModule } from "@angular/common/http";
import { SystemsListComponent } from "./components/systems-list/systems-list.component";
import { ByService } from "./components/main/by.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SystemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
