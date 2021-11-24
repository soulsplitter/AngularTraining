//imports voor deze module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { BusinessComponent } from './business/business.component';

//typescript Decorator
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//JavaScript-klasse, geen logica
export class AppModule { }
