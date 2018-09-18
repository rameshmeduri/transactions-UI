import React, { Component } from 'react';
import { withStyles, Grid, Button, Radio, RadioGroup, FormControlLabel, FormControl, TextField } from '@material-ui/core';

import DynTable from './Table';
import TrPieChart from './Chart';

const styles = (theme) => ({
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing.unit,
    display: 'block'
  },
  radioGroup: {
    margin: `${theme.spacing.unit}px 0`
  },
  marginTop: {
    marginTop: '60px'
  }
});

class Transfer extends Component {
  state = {
    transactionId: 1000,
    userName: '',
    paymentMode: '',
    amount: '',
    rows: [],
    chartData: {}
  };
  onChange = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };
  makeTransfer = (e) => {
    let newId = this.state.transactionId + 1;
    let obj = {
      transactionId: newId,
      userName: this.state.userName,
      paymentMode: this.state.paymentMode,
      amount: this.state.amount
    };
    let newArr = (this.state.rows.concat(obj));


    let c = { ...this.state.chartData };
    let k = obj.paymentMode;
    if (!c[k]) {
      c[k] = 1;
    } else {
      c[k] += 1;
    }


    this.setState({
      transactionId: newId,
      userName: '',
      paymentMode: '',
      amount: '',
      rows: newArr,
      chartData: c
    });


  };
  render() {
    const { classes } = this.props;
    const { rows, chartData } = this.state;
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            <div className={classes.section}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="user"
                  className={classes.radioGroup}
                  value={this.state.userName}
                  onChange={this.onChange('userName')}
                >
                  <FormControlLabel value="USER-A" control={<Radio />} label="USER - A" />
                  <FormControlLabel value="USER-B" control={<Radio />} label="USER - B" />
                  <FormControlLabel value="USER-C" control={<Radio />} label="USER - C" />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.section}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="paymentMode"
                  className={classes.radioGroup}
                  value={this.state.paymentMode}
                  onChange={this.onChange('paymentMode')}
                >
                  <FormControlLabel value="American Express" control={<Radio />} label="American Express" />
                  <FormControlLabel value="VISA" control={<Radio />} label="VISA" />
                  <FormControlLabel value="DBS PayLa" control={<Radio />} label="DBS PayLa" />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.section}>
              <TextField
                value={this.state.amount}
                onChange={this.onChange('amount')}
                className={classes.marginTop}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.section}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.makeTransfer}
                className={classes.marginTop}>
                Transfer
              </Button>
            </div>
          </Grid>
        </Grid>
        <div>
          <DynTable rows={rows} />
        </div>
        <div>
          <TrPieChart chartData={chartData} />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Transfer);
