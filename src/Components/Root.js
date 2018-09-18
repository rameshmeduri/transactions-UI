import React from 'react';
import { withStyles } from '@material-ui/core';
import Transfer from './Transfer';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    border: '1px solid #ccc',
    margin: '10px',
    padding: '10px'
  }
});

const Root = ({ classes }) => (
  <div className={classes.root}>
    <Transfer />
  </div>
);

export default withStyles(styles)(Root);
