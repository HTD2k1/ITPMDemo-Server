import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import IUlogo from "./images/IUlogo.png";
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts";
import useStyles from './styles.js'; 

const App = () => {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          MY APP
        </Typography>
        <img className={classes.image} src={IUlogo} alt="IUlogo" height="300" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
