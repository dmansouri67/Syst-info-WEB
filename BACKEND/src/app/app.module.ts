import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadrestComponentComponent } from './headrest-component/headrest-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormAccountComponentComponent } from './form-account-component/form-account-component.component';
import { RecapComponentComponent } from './recap-component/recap-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadrestComponentComponent,
    FooterComponentComponent,
    FormAccountComponentComponent,
    RecapComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
