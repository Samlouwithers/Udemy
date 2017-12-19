import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'this is the test description', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg'),
		new Recipe('A Test Recipe', 'this is the test description', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

}
