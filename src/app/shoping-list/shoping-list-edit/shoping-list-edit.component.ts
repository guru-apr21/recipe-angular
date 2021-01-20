import { ShoppingListService } from './../../shopping-list.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css'],
})
export class ShopingListEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(event: Event) {
    event.preventDefault();
    this.shoppingListService.addIngredients({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value,
    });
  }
}
