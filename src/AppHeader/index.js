import React from "react";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { AppBar, Toolbar, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  navbarTop: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const AppHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
    <Toolbar className={classes.navbarTop}>
      <Typography variant="h6">
        Where in the world
      </Typography>
      
        <Button
        variant="contained"
        color="secondary"
        startIcon={<Brightness2Icon />}
        >
        Color mode
        </Button>
    </Toolbar>
  </AppBar>
  );
}

export {AppHeader};