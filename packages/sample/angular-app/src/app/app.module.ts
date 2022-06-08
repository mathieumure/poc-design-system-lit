import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DsyInputValueAccessorDirective } from './wrapper/dsy-input-value-accessor.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DsyInputValueAccessorDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
