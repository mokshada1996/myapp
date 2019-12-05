import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgModel,NgForm,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:" ",component:HomeComponent},

      {path:"home",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},
      {path:"edit/:id",component:EditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
