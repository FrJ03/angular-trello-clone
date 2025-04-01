import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
}

@Component({
  selector: 'app-scroll',
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data) => {
      this.products = data;
    });
  }
}
