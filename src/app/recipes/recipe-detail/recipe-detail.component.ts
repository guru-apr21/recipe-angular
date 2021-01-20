import { Component, Input } from '@angular/core';
import { Recipe } from './../recipe.model';
import { ShoppingListService } from './../../shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}
  addToShoppingList() {
    for (let ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngredients(ingredient);
    }
  }
}
