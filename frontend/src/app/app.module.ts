import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddComponent } from './components/add/add.component';
import { CardComponent } from './components/card/card.component';
import { VotingButtonsComponent } from './components/voting-buttons/voting-buttons.component';
import { SearchInputComponent } from './components/seatch-input/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BlogComponent,
    AddComponent,
    CardComponent,
    VotingButtonsComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
