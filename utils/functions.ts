import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: '600px',
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
		},
	})
);
