import { makeStyles } from '@material-ui/styles';
import React, { useState }  from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: '50px',
  },
  standardSuccess: {
    // .MuiAlert-standardSuccess
    backgroundColor: theme.palette.common.beta,
    color: theme.palette.common.light,
    '& .MuiSvgIcon-root': {
      color: theme.palette.common.light,
    }
  }
}))

export default function Cookie({ props }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <AppBar position='static' className={classes.root}>
      <Collapse in={open}>
        <Alert
          classes={{ standardSuccess: classes.standardSuccess }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Jobplus uses cookies. By continuing you are agreeing to our use of cookies. Learn more.
        </Alert>
      </Collapse>
    </AppBar>
  );
}
