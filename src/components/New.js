import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: theme.spacing.unit * 2
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
});

function CenteredGrid(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						xs=12{' '}
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
							optio nostrum quibusdam sint architecto voluptatum, perferendis
							tenetur officiis repudiandae amet quod eius! Veritatis ipsam eius
							nihil dicta, neque in impedit.
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						xs=6{' '}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							dolores pariatur ullam in laudantium neque corrupti. Voluptas
							dolorum libero, facilis non voluptate nihil delectus itaque.
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						xs=6{' '}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
							fuga cum sed quibusdam praesentium. Fugit nihil reprehenderit
							commodi dolorem placeat aut minima. Doloribus, tempore et.
						</p>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						xs=3{' '}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
							esse obcaecati ipsum pariatur fugiat praesentium?
						</p>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						xs=3{' '}
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Blanditiis laborum vitae corrupti odio officia rem.
						</p>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						xs=3{' '}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
							illum eos minima quas at animi.
						</p>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						xs=3{' '}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
							provident repudiandae facilis rem, vero veniam!
						</p>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

CenteredGrid.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
