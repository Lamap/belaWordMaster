import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import  { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WordBoxComponent } from './word-box/word-box.component';
import { WordListComponent } from './word-list/word-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WordBoxComponent,
    WordListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
