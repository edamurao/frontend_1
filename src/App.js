import React from 'react';
import Header from './component/header';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Content from './component/content';
import About from './component/about';

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1300
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
          <Grid item sm={12}>
            <Content />
          </Grid>
          <Grid item sm={12}>
            <Box>
              <About />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
