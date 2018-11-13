import * as React from 'react'

import Grid from '@material-ui/core/Grid'

import { Counter } from '../counter'

const NUMBER_OF_COUNTERS = 36

const array = Array.apply(null, { length: NUMBER_OF_COUNTERS }).map(Number.call, Number)

const CounterArray = () => (
  <Grid container>
    <Grid item xs={12}>
      <Grid container justify='center'>
        {
          array.map(n => (
            <Grid key={n} item>
              <Counter key={n} label={n} />
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  </Grid>
)

export { CounterArray }