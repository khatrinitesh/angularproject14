import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// below components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// below pages
import { AboutComponent } from './pages/about/about.component';
import { PropertylistComponent } from './pages/propertylist/propertylist.component';
import { StatesComponent } from './pages/states/states.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';

// whenever if there is no other pages url then it will be automatically show error page as well
import { ErrorComponent } from './pages/error/error.component';
import { BannerComponent } from './components/banner/banner.component';
import { ScrolltopComponent } from './components/scrolltop/scrolltop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PropertylistComponent,
    StatesComponent,
    FaqComponent,
    BlogComponent,
    ContactusComponent,
    HomeComponent,
    ErrorComponent,
    BannerComponent,
    ScrolltopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
