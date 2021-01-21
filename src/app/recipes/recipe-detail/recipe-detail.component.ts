import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';
import { ShoppingListService } from './../../shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  addToShoppingList() {
    for (let ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngredients(ingredient);
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.recipe = this.recipesService.recipes[id];
    });
  }
}
