import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './../recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, DoCheck {
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngDoCheck() {
    this.selectedRecipe = this.recipesService.selectedRecipe;
  }

  ngOnInit(): void {}
}
