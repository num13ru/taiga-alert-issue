import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { TuiButtonModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TuiPushModule } from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiPushModule,
    TuiButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
