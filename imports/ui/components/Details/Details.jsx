import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from 'chart.js'

import useStyles from './styles';
import useTransactions from '../../useTransactions'


Chart.register(ArcElement, Legend);

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Entrate" ? classes.entrate : classes.uscite}>
        <CardHeader title={title} />
        <CardContent>
            <Typography variant="h5">€{total}</Typography>
            <Doughnut data={chartData} />
        </CardContent>
    </Card>
  )
}

export default Details