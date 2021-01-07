import { Ingredient } from './../../common/ingredient.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css'],
})
export class ShopingListEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}

  onAddItem(event: Event) {
    event.preventDefault();
    this.ingredientAdded.emit({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value,
    });
  }
}
