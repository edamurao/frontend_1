import React from 'react';
import Header from './component/header';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Content from './component/content';
import About from './component/about';

const useStyle = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1440,
      padding: '0px 8.5px',
    }
  }
}));

function App() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Header />
      <Box boxShadow={5}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Content />
          </Grid>
          <Grid item xs={12}>
            <About />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
