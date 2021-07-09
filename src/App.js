import React from 'react';
import Header from './component/header';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Content from './component/content';
import About from './component/about';

const containerWidth = 1440;

const useStyle = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      maxWidth: containerWidth,
    }
  }
}));

function App() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Header />
      <Box boxShadow={12}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Content 
              containerWidth={containerWidth}
            />
          </Grid>
          <Grid item xs={12}>
            <About 
              containerWidth={containerWidth}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
