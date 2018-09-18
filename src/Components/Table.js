import React from 'react';
import { withStyles, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto'
	},
	table: {
		minWidth: 700,
	},
});


const DynTable = (props) => {
	const { classes, rows } = props;
	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Transaction ID</TableCell>
						<TableCell>User Name</TableCell>
						<TableCell>Payment Mode</TableCell>
						<TableCell>Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => {
						return (
							<TableRow key={index}>
								<TableCell>{row.transactionId}</TableCell>
								<TableCell>{row.userName}</TableCell>
								<TableCell>{row.paymentMode}</TableCell>
								<TableCell>{row.amount}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}

export default withStyles(styles)(DynTable);
