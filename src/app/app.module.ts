import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MixinStylesComponent } from './mixin-styles/mixin-styles.component';
import { GlobalStylesComponent } from './global-styles/global-styles.component';
import { DuplicateStylesComponent } from './duplicate-styles/duplicate-styles.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MixinStylesComponent, GlobalStylesComponent, DuplicateStylesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
