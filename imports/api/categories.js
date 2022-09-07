import { Mongo } from 'meteor/mongo';

export const incomeCategoriesCollection = new Mongo.Collection('incomeCategories');
export const expenseCategoriesCollection = new Mongo.Collection('expenseCategories');
  