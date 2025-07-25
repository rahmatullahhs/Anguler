import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';


import { Home } from './components/dashboard/home/home';
import { Header } from './components/dashboard/header/header';
import { Footer } from './components/dashboard/footer/footer';
import { AdminDashboard } from './components/dashboard/admin-dashboard/admin-dashboard';
import { Register } from './auth/register/register';
import { Userprofile } from './auth/userprofile/userprofile';
import { Login } from './auth/login/login';

import { Viewallemp } from './hrm/viewallemp/viewallemp';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Addemp } from './hrm/addemp/addemp';
import { Updateemp } from './hrm/updateemp/updateemp';

import { AddProduct } from './goods/addproduct/addproduct';
import { Addcustomer } from './crm/addcustomer/addcustomer';
import { Viewallcustomer } from './crm/viewallcustomer/viewallcustomer';
import { Updatecustomer } from './crm/updatecustomer/updatecustomer';
import { Addsupplier } from './supplier/addsupplier/addsupplier';
import { Viewallsupplier } from './supplier/viewallsupplier/viewallsupplier';
import { Updatesupplier } from './supplier/updatesupplier/updatesupplier';

import { Showpurchase } from './purchase/showpurchase/showpurchase';
import { Addpurchase } from './purchase/addpurchase/addpurchase';
import { Addcategory } from './category/addcategory/addcategory';
import { Addbrand } from './brand/addbrand/addbrand';


import { Addorder } from './order/addorder/addorder';
import { Addreturnproduct } from './returnproduct/addreturnproduct/addreturnproduct';
import { Addrepairproduct } from './returnproduct/addrepairproduct/addrepairproduct';
import { Addaccount } from './account/addaccount/addaccount';
import { Addchart } from './account/addchart/addchart';
import { Showreport } from './report/showreport/showreport';
import { ViewAllstock } from './goods/view-allstock/view-allstock';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Billstracking } from './account/billstracking/billstracking';
import { AddCogsComponent } from './account/cogs/cogs';
import { Addentry } from './account/accountpayentry/addentry/addentry';
import { AccountPayEntryComponent } from './account/accountpayentry/accountpayentrycomponentForm';

import { Viewallorder } from './order/viewallorder/viewallorder';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Addinventory } from './inventory/addinventory/addinventory';
import { Viewinventory } from './inventory/viewinventory/viewinventory';
import { Salestracking } from './account/salestracking/salestracking';
import { EmpSalaryComponent } from './account/empsalary/empsalary';
import { AdminProfile } from './auth/admin-profile/admin-profile';
import { ManagerProfile } from './auth/manager-profile/manager-profile';
import { CasierProfile } from './auth/casier-profile/casier-profile';
import { Purchasehistory } from './history/purchasehistory/purchasehistory';
import { Sellhistory } from './history/sellhistory/sellhistory';




@NgModule({
  declarations: [
    App,
    Home,
    AdminDashboard,
    Header,
    Footer,
    Register,
    Userprofile,
    Login, 
    
    Addemp,
    Updateemp,
     Viewallemp,

      Addcustomer,
      Viewallcustomer,
      Updatecustomer,


      Addcategory,
      Addbrand,
      AddProduct,
      ViewAllstock,
      Addinventory,
      Viewinventory,

      Addsupplier,
      Viewallsupplier,
      Updatesupplier,

      Showpurchase,
      Addpurchase,

      Addorder,
      Viewallorder,

      Addreturnproduct,
      Addrepairproduct,

      Addaccount,
      Addchart,
      Showreport,
       Billstracking, 
       Salestracking,

        AddCogsComponent,      
        Addentry,
         AccountPayEntryComponent,
         
  EmpSalaryComponent,
  AdminProfile,
  ManagerProfile,
  CasierProfile,
  Purchasehistory,
  Sellhistory
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
      MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    
    MatSelectModule
    


  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())


  ],
  bootstrap: [App]
})
export class AppModule { }
