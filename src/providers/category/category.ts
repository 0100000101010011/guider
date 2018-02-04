import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CategoryProvider {

  //categories data model
  private categories: { 
    category: string 
  }[] = [];

  //categories filter data model
  private categoriesFilter: { 
    text: string, 
    description: string, 
    category: string
  }[] = [];

    constructor( 
    private storage: Storage
  ) {
    
  }

  addNewCategory(newCategory: { 
    category: string 
  }) {
    //first pull in the data into the private categories data model here in the class
    this.categories.push(newCategory);
    //then store that populated data model into storage
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
