import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { FormStyle } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';

const routes = [
  {path: '', component:HeaderComponent},
  {path: 'news', component: NewsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
