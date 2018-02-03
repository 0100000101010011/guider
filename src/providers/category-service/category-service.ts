import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CategoryServiceProvider {

  private categories: { 
    category: string 
  }[] = [];

  private categoriesFilter: { 
    text: string, 
    description: string, 
    category: string
  }[] = [];

    constructor( 
    private storage: Storage
  ) {
    
  }

  addNewCategory(newCategory: { category: string }) {
    this.categories.push(newCategory);
    this.storage.set('categories', this.categories);
  }

  addfilteredCategory(newFilter){
    this.categoriesFilter = newFilter;
    this.storage.set('categoriesFilter', this.categoriesFilter);
  };

  getCategories() {
    return this.storage.get('categories').then(
      (categories) => {
        this.categories = categories == null ? [] : categories;
        return this.categories.slice();
      }
    );
  }

  getFiltered() {
    return this.storage.get('categoriesFilter').then(
      (categoriesFilter) => {
        this.categoriesFilter = categoriesFilter == null ? [] : categoriesFilter;
        return this.categoriesFilter.slice();
      }
    );
  }

}
