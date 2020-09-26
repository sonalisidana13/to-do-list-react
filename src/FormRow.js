import React from "react";
import {
  Grid,
  Paper,
} from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AddToDo from './AddToDo';
import InProgressToDo from './InProgressToDo';
import CompoletedToDo from './CompletedToDo'

function FormRow() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));
  
  const classes = useStyles();
  return (
    
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <h3>TO Do's</h3>
          <AddToDo></AddToDo>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}> 
        <h3>In Progress</h3>
        <InProgressToDo></InProgressToDo></Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}> 
        <h3>Completed</h3>
        <CompoletedToDo></CompoletedToDo></Paper>
      </Grid>
    </React.Fragment>
  );
}

export default FormRow;
