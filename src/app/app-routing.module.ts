import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// below components for other pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PropertylistComponent } from './pages/propertylist/propertylist.component';
import { StatesComponent } from './pages/states/states.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'propertylist'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutComponent
  },
  {
    path: 'propertylist',
    component: PropertylistComponent
  },
  {
    path: 'states',
    component: StatesComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: '**',
    component:ErrorComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
