import { useContext } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategoriesCollection, expenseCategoriesCollection } from '../api/categories';
import { resetCategories } from '../api/categoriesMethods'

const useTransactions = (title) => {
  resetCategories();
  const incomeCategories = useTracker(() => incomeCategoriesCollection.find({}).fetch());
  const expenseCategories = useTracker(() => expenseCategoriesCollection.find({}).fetch());

  const { transactions } = useContext(ExpenseTrackerContext);
  const tipo = title === 'Entrate' ? 'Entrata' : 'Uscita';
  const transactionsPerType = transactions.filter((t) => t.type === tipo);
  const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Entrate' ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {
    
    const category = categories.find((c) => c.type === t.category);;
    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((fc) => fc.amount > 0);
  
  const chartData = {
    labels: filteredCategories.map((c) => c.type),
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }]
  };

  return { total, chartData };
};

export default useTransactions;
