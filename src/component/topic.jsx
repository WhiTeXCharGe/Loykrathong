import React from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import CentralCard from './Card/centralcard';
import NorthCard from './Card/northcard';
import EisanCard from './Card/eisancard';
import SouthCard from './Card/southcard';


function Topic() {
    return (
      <div>
        
        <Container maxWidth="lg">
        <Grid container spacing={4}>
  <Grid item xs={3}>
    <CentralCard/>
  </Grid>
  <Grid item xs={3}>
    <NorthCard/>
  </Grid>
  <Grid item xs={3}>
  <EisanCard/>
  </Grid>
  <Grid item xs={3}>
    <SouthCard/>
  </Grid>
</Grid>

        </Container>
        
      </div>
    );
  }
  
  export default Topic;
  