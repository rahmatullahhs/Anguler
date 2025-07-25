import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/dashboard/home/home';
import { AdminDashboard } from './components/dashboard/admin-dashboard/admin-dashboard';
import { Footer } from './components/dashboard/footer/footer';
import { Header } from './components/dashboard/header/header';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';
import { Viewallemp } from './hrm/viewallemp/viewallemp';
import { Addemp } from './hrm/addemp/addemp';
import { Updateemp } from './hrm/updateemp/updateemp';
import { AddProduct } from './goods/addproduct/addproduct';
import { Viewallcustomer } from './crm/viewallcustomer/viewallcustomer';
import { Updatecustomer } from './crm/updatecustomer/updatecustomer';
import { Addcustomer } from './crm/addcustomer/addcustomer';

import { Addcategory } from './category/addcategory/addcategory';
import { Addbrand } from './brand/addbrand/addbrand';
import { Addpurchase } from './purchase/addpurchase/addpurchase';
import { Addsupplier } from './supplier/addsupplier/addsupplier';
import { Addreturnproduct } from './returnproduct/addreturnproduct/addreturnproduct';
import { Addrepairproduct } from './returnproduct/addrepairproduct/addrepairproduct';
import { Addaccount } from './account/addaccount/addaccount';
import { Addchart } from './account/addchart/addchart';
import { Showreport } from './report/showreport/showreport';
import { Viewallsupplier } from './supplier/viewallsupplier/viewallsupplier';
import { Updatesupplier } from './supplier/updatesupplier/updatesupplier';
import { ViewAllstock } from './goods/view-allstock/view-allstock';

import { Billstracking } from './account/billstracking/billstracking';
import { Salestracking } from './account/salestracking/salestracking';


import { Addentry } from './account/accountpayentry/addentry/addentry';
import { AccountPayEntryComponent } from './account/accountpayentry/accountpayentrycomponentForm';

import { AddCogsComponent } from './account/cogs/cogs';
import { Addinventory } from './inventory/addinventory/addinventory';
import { Addorder } from './order/addorder/addorder';
import { Viewallorder } from './order/viewallorder/viewallorder';
import { EmpSalaryComponent } from './account/empsalary/empsalary';
import { AdminProfile } from './auth/admin-profile/admin-profile';
import { CasierProfile } from './auth/casier-profile/casier-profile';
import { ManagerProfile } from './auth/manager-profile/manager-profile';
import { Userprofile } from './auth/userprofile/userprofile';
import { Sellhistory } from './history/sellhistory/sellhistory';
import { Purchasehistory } from './history/purchasehistory/purchasehistory';



const routes: Routes = [

  { path: '', component: Home },

  { path: 'admindashboard', component: AdminDashboard },
  { path: 'footer', component: Footer },
  { path: 'header', component: Header },


  { path: 'viewallemp', component: Viewallemp },
  { path: 'addemp', component: Addemp },
  { path: 'updateEmp/:id', component: Updateemp },


  { path: 'addproduct', component: AddProduct },
  { path: 'viewallstock', component: ViewAllstock },
  

  { path: 'addcategory', component: Addcategory },
  { path: 'addbrand', component: Addbrand },

  { path: 'viewallcustomer', component: Viewallcustomer },
  { path: 'updatecustomer/:id', component: Updatecustomer },
  { path: 'addcustomer', component: Addcustomer },

  { path: 'addpurchase', component: Addpurchase },
  { path: 'addorder', component: Addorder },
  { path: 'addsupplier', component: Addsupplier },
  { path: 'viewallsupplier', component: Viewallsupplier },
  { path: 'updatesupplier/:id', component: Updatesupplier },

  { path: 'addreturnproduct', component: Addreturnproduct },
  { path: 'addrepairproduct', component: Addrepairproduct },
  { path: 'addaccount', component: Addaccount },
  { path: 'addchart', component: Addchart },
  { path: 'showreport', component: Showreport },


  { path: 'billstracking', component: Billstracking },
  { path: 'salestracking', component: Salestracking },
  { path: 'cogs', component: AddCogsComponent },
  { path: 'accountpayentry', component: AccountPayEntryComponent },
 { path: 'viewAllorder', component: Viewallorder },
  { path: 'addentry', component: Addentry },

  { path: 'addinventory', component: Addinventory },
  { path: 'saletracking', component: Salestracking },

 { path: 'empsalary', component: EmpSalaryComponent },
  { path: 'admin', component: AdminProfile },
   { path: 'casier', component: CasierProfile },
    { path: 'manager', component: ManagerProfile },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'user', component: Userprofile },
    { path: 'sellhis', component: Sellhistory },
    { path: 'purchasehis', component: Purchasehistory }










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
