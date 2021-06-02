import { Container } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function InputQuestions (){
   return(
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h6">Responsive h3</Typography>
        
      </ThemeProvider>
    </div>
       
       
   )
}