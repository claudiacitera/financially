import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return ( 
    <Card className={classes.root}>
        <CardHeader title="Financially" subheader="Il tuo tracker delle spese"/>
        <CardContent>
            <Typography align="center" variant="h5">Totale: €{balance}</Typography>
            <Typography align="center" variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                Aggiungi una nuova Entrata o Uscita tramite il form qui sotto.
            </Typography>
            <Divider className={classes.divider} />
            <Form />
        </CardContent>
        <CardContent className={classes.cartContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
};

export default Main;