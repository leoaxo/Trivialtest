import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HeaderElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props: Props) {
  return (
    <Box>
    <React.Fragment>
      <CssBaseline />
      <HeaderElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" color="initial">Questionário</Typography>
          </Toolbar>
        </AppBar>
      </HeaderElevationScroll>
      <Toolbar />
    </React.Fragment>
    </Box>
  );
}



     
       
 