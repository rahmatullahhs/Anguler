import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductModel } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import { Component, OnInit } from "@angular/core";
import { BrandService } from "../../services/brand.service";
import { BrandModel } from "../../models/brand.model";

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.html',
  styleUrls: ['./addproduct.css']
})
export class AddProduct implements OnInit {
  products!: any;
  productForm: FormGroup;
  editing: boolean = false;

  brands: BrandModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private brandService: BrandService
  ) {
    this.productForm = this.formBuilder.group({
      id: [null],  // In case you use it for edit
      name: ['', Validators.required],
      graphicscard: [''],
      monitor: [''],
      processor: [''],
      ram: [''],
      storage: [''],
      price: [0],
      stock_qty: [0],
       brandId: [null, Validators.required]  // Store ID!
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadBrands();
  }

  loadProducts(): void {
    this.products = this.productService.getAll();
  }

  loadBrands(): void {
    this.brandService.getAllBrand().subscribe({
      next: (res) => {
        this.brands = res;
      },
      error: (err) => {
        console.error('Error loading brands:', err);
      }
    });
  }

  onSubmit() {
  if (this.productForm.valid) {
    const product: ProductModel = this.productForm.value;

    if (this.editing && product.id) {
      // UPDATE
      this.productService.update(product).subscribe(() => {
        alert('Product updated successfully!');
        this.loadProducts();
        this.cancelEdit();
      });
    } else {
      // CREATE
      const newProduct: ProductModel = {
        name: product.name,
        processor: product.processor,
        ram: product.ram,
        storage: product.storage,
        graphicscard: product.graphicscard,
        monitor: product.monitor,
        price: product.price,
        stock_qty: product.stock_qty,
        brandId: product.brandId 
      };
      this.productService.add(newProduct).subscribe(() => {
        alert('Product added successfully!');
        this.loadProducts();
        this.productForm.reset();
      });
    }
  } else {
    alert('Please fill in required fields.');
  }
}


  editProduct(product: ProductModel): void {
    this.editing = true;
    this.productForm.patchValue(product);
  }

  deleteProduct(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(id).subscribe(() => {
        alert('Product deleted!');
        this.loadProducts();
      });
    }
  }

  getBrandName(brandId: string): string {
    return this.brands.find(b => b.id === brandId)?.name || 'N/A';
  }

  cancelEdit(): void {
    this.editing = false;
    this.productForm.reset({
      id: null,
      name: '',
      graphicscard: '',
      monitor: '',
      processor: '',
      ram: '',
      storage: '',
      price: 0,
      stock_qty: 0,
      brandId: null
    });
  }
}

