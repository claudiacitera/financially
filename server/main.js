import { Meteor } from 'meteor/meteor';
import { incomeCategoriesCollection } from '../imports/api/categories';
import { expenseCategoriesCollection } from '../imports/api/categories';
import '/imports/api/categoriesMethods';

const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

function insertIncomeCategory({ type, amount, color }) {
  incomeCategoriesCollection.insert({type, amount, color, createdAt: new Date()});
}

function insertExpenseCategory({ type, amount, color }) {
  expenseCategoriesCollection.insert({type, amount, color, createdAt: new Date()});
}

Meteor.startup(() => {
  if (incomeCategoriesCollection.find().count() === 0) {
    [
    { type: 'Business', amount: 0, color: incomeColors[0] },
    { type: 'Investimenti', amount: 0, color: incomeColors[1] },
    { type: 'Entrate extra', amount: 0, color: incomeColors[2] },
    { type: 'Depositi', amount: 0, color: incomeColors[3] },
    { type: 'Lotteria', amount: 0, color: incomeColors[4] },
    { type: 'Regali', amount: 0, color: incomeColors[5] },
    { type: 'Salario', amount: 0, color: incomeColors[6] },
    { type: 'Risparmi', amount: 0, color: incomeColors[7] },
    { type: 'Rental income', amount: 0, color: incomeColors[8] }
    ].forEach(insertIncomeCategory)
    
  }

  if (expenseCategoriesCollection.find().count() === 0) {
    [
      { type: 'Bollette', amount: 0, color: expenseColors[0] },
      { type: 'Auto', amount: 0, color: expenseColors[1] },
      { type: 'Vestiti', amount: 0, color: expenseColors[2] },
      { type: 'Viaggi', amount: 0, color: expenseColors[3] },
      { type: 'Cibo', amount: 0, color: expenseColors[4] },
      { type: 'Shopping', amount: 0, color: expenseColors[5] },
      { type: 'Casa', amount: 0, color: expenseColors[6] },
      { type: 'Intrattenimento', amount: 0, color: expenseColors[7] },
      { type: 'Telefono', amount: 0, color: expenseColors[8] },
      { type: 'Animali', amount: 0, color: expenseColors[9] },
      { type: 'Altro', amount: 0, color: expenseColors[10] }
    ].forEach(insertExpenseCategory)
  }

});