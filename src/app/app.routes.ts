import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortofiloComponent } from './portofilo/portofilo.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
    title: 'about',
  },
  {
    path: 'portfilio',
    component: PortofiloComponent,
    title: 'portfilio',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'contact',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'home',
  },
];
