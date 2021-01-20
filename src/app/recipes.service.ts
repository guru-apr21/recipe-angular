import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './common/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private _recipes: Recipe[] = [
    new Recipe(
      'Classic Hamburger',
      'Gandhi porandha mannu, thinnu paaru bun uh',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/800px-RedDot_Burger.jpg',
      [new Ingredient('Bun', 2), new Ingredient('Cheese slice', 2)]
    ),
    new Recipe(
      'Tasty Spicy Chicken Pizza',
      'Kaai ku raja muttakos, Pizza ku raja Dominos',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      [new Ingredient('Tomato', 4), new Ingredient('Capsicum', 3)]
    ),
  ];

  selectedRecipe: Recipe;

  get recipes() {
    return [...this._recipes];
  }

  onRecipeSelect(id: number) {
    this.selectedRecipe = this.recipes[id];
  }
}
