import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../common/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Oranges', 5),
  ];

  constructor() {}

  ngOnInit(): void {}
}
