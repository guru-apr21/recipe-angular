import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './common/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Oranges', 5),
  ];

  get ingredients(): Ingredient[] {
    return [...this._ingredients];
  }

  ingredientsAdded = new EventEmitter<Ingredient[]>();

  addIngredients(ingredient: Ingredient) {
    this._ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsAdded.emit(this._ingredients);
  }
}
