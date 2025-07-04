import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Catagories } from './components/catagories/catagories';
import { Brands } from './components/brands/brands';
import { Accessories } from './components/accessories/accessories';
import { Products } from './components/products/products';
import { Home } from './components/dashboard/home/home';
import { Header } from './components/dashboard/header/header';
import { Footer } from './components/dashboard/footer/footer';
import { AdminDashboard } from './components/dashboard/admin-dashboard/admin-dashboard';






@NgModule({
  declarations: [
    App,
    Catagories,
    Brands,
    Accessories,
    Products,
    Home,
    Header,
    Footer,
    AdminDashboard

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
