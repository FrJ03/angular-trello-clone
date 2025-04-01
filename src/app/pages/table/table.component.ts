import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  imports: [NavbarComponent, CdkTableModule, BtnComponent, ReactiveFormsModule],
})
export class TableComponent implements OnInit {
  products = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data) => {
      this.products.init(data);
    });

    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.products.find(value);
    });
  }

  update(product: Product) {
    this.products.update(product.id, { price: 10 });
  }
}
