import { incomeCategoriesCollection, expenseCategoriesCollection } from './categories';

export function resetCategories() {
  incomeCategoriesCollection.find().fetch().map((c) => c.amount = 0);
  expenseCategoriesCollection.find().fetch().map((c) => c.amount = 0);
}