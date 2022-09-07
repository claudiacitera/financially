import React, { useState, useContext } from 'react'
import { useTracker } from 'meteor/react-meteor-data';
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategoriesCollection, expenseCategoriesCollection } from '../../../../api/categories';
import formatDate from '../../../utils/formatDate'
import CustomizedSnackbar from '../../Snackbar/Snackbar'

const initialState = {
  amount: '',
  category: '',
  type: 'Entrata',
  date: formatDate(new Date())
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const incomeCategories = useTracker(() => incomeCategoriesCollection.find({}).fetch());
  const expenseCategories = useTracker(() => expenseCategoriesCollection.find({}).fetch());

  const selectedCategories = formData.type === 'Entrata' ? incomeCategories : expenseCategories;

  const [open, setOpen] = React.useState(false);

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;

    setOpen(true);
    addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
        <CustomizedSnackbar open={open} setOpen={setOpen}/>
        <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Tipo</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Entrata">Entrata</MenuItem>
            <MenuItem value="Uscita">Uscita</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Categoria</InputLabel>
          <Select  value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            { selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Quantità" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Data" type="date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Crea</Button>
    </Grid>
  )
}

export default Form