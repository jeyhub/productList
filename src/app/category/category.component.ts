import { Component, OnInit } from '@angular/core';
import {Category} from "./category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Category list"

  categories: Category[] = [
    {id:1, name:"Office"},
    {id:2, name:"Home"},
    {id:3, name:"Electronic"}
  ]

  // categories = undefined;

  ngOnInit(): void {
  }

}
