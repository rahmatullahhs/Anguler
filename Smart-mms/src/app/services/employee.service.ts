import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = "http://localhost:3000/employee";
// এটি একটি ক্লাসের প্রপার্টি (property) বা ভেরিয়েবল, যার নাম baseUrl এবং টাইপ string।
// এটি হলো আপনার API সার্ভারের URL, যেখানে আপনি Employee-সংক্রান্ত ডেটা পাঠাবেন, নিবেন, বা মুছবেন।
// 🎯 ব্যবহার কোথায় হয়?
// এই baseUrl আপনি নিচের মত API কলগুলোতে ব্যবহার করছেন:
// return this.http.get(this.baseUrl);              // Get all employees
// return this.http.post(this.baseUrl, employee);   // Create employee
// return this.http.delete(this.baseUrl + "/" + id); // Delete employee by ID
// অর্থাৎ, বারবার "http://localhost:3000/employee" না লিখে, আপনি শুধু this.baseUrl লিখে কাজ সারছেন।

  constructor(private http: HttpClient) { }

// 🏗️ constructor কী?
// constructor হল একটি বিশেষ ফাংশন, যা কোনো ক্লাস (class) থেকে অবজেক্ট তৈরি করার সময় স্বয়ংক্রিয়ভাবে কল (call) হয়।
// ✅ constructor-এর কাজ কী?
// ক্লাসের প্রপার্টিগুলো ইনিশিয়ালাইজ (initialize) বা মান সেট করা।
// ডিপেনডেন্সি ইনজেকশন করা (যেমন: Angular-এ HttpClient, Router, ইত্যাদি ইনজেক্ট করা)।
// অবজেক্ট তৈরি হওয়ার সময় কিছু প্রাথমিক কাজ সম্পন্ন করা।
// 🧠 কেন এটা ব্যবহার করা হয়?
// HttpClient Angular-এর বিল্ট-ইন সার্ভিস, যা দিয়ে আমরা API-এর সাথে HTTP রিকোয়েস্ট 
// (GET, POST, PUT, DELETE ইত্যাদি) করতে পারি।
// ডিপেনডেন্সি ইনজেকশন ব্যবহারে আমরা সহজেই সার্ভিসগুলোর কোড পুনঃব্যবহার করতে পারি এবং টেস্টিং সহজ হয়।

 // To Get All Employees
  getAllEmp(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
//   🔍 ব্যাখ্যা (বাংলায়):
// ✅ এটি কী করে?
// getAllEmp() একটি ফাংশন, যেটি সার্ভার (API) থেকে সবগুলো Employee-এর ডেটা নিয়ে আসে।
//   getAllEmp() API-তে GET রিকোয়েস্ট পাঠায়।
// API থেকে ডেটা এলে subscribe() ব্লকের ভেতরে data পাওয়া যায়।
// this.employees এ সেই ডেটা রাখা হয়, যা আপনি টেমপ্লেটে দেখাতে পারেন।
// getAllEmp(): Observable<any>
// এটি একটি মেথড বা ফাংশন, যার রিটার্ন টাইপ হলো Observable<any>।
// // Observable হলো এমন একটি ডেটা স্ট্রিম যা আপনি subscribe করে ডেটা পেতে পারেন (Angular-এর HTTP কল সবসময় Observable রিটার্ন করে)।
// 🔄 Observable কী? (বাংলায় সহজভাবে)
// Observable হলো এমন একটি সিস্টেম, যেটি সময় অনুযায়ী ডেটা পাঠাতে পারে এবং আপনি সেই ডেটার জন্য "subscribe" করে অপেক্ষা করতে পারেন।
// 🔁 এটি একবারেই ডেটা দেয় না — যখন ডেটা আসে, তখন আপনাকে নোটিফাই করে দেয়।
// এখানে Observable<any> মানে হলো:
// “এই ফাংশনটি এমন একটি ডেটা রিটার্ন করে, যেটা আপনি সরাসরি এখনই পাবেন না — বরং আপনি subscribe করলে পরে ডেটা পেয়ে যাবেন।”
// Access করতে হয়	.subscribe() দিয়ে

  // To Add New Employee
  saveEmp(employee: Employee): Observable<any> {
    return this.http.post(this.baseUrl, employee);
  }

  // To Delete Employee
  deleteEmp(id: string): Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id);
  }

  // To Find Employee By ID
  getEmployeeById(id: string): Observable<any>{
    return this.http.get(this.baseUrl+"/"+id);
  }

  // To Update Employee By Id
  updateEmp(id: string, employee: Employee): Observable<any>{
    return this.http.put(this.baseUrl+"/"+id, employee);
  }
}



