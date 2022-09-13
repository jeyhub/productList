import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {AlertifyService} from "../services/alertify.service"
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //providers: [AlertifyService] - if service for local usages
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService, private productService:ProductService) { } //dependency injection
  title = "Product list"
  filterText = ""
  products : Product[] = []

  // product.ts = undefined

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>this.products = data)
  }

  addToCart(product: { name: string; }) {
    this.alertifyService.success(product.name + " added");
  }



}
