import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blog from './blog1.jpg';
import profile from './profile.jpg';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import {Favorite,Share,Comment,Email} from '@material-ui/icons';


function App() {

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),

  },
  input: {
    display: 'none',
  },
}));

const classes = useStyles();  


  return (
    <div className="App">
    	<header className="App-header">
    		<text className="text3"> <img src={profile} className="profile" align="center"/>Avinash Bharadwaj <text className="text4">@AviBharadwaj.June 6</text></text>
    			

    				<div className="imageTextBod">
    					<img src={blog} className="image"/>
    						<text className="text1">The importance of writing daily</text>
    						<br></br>
    						<text className="text2"> Ready to begin a new career in writing? Start today!</text>
    						<br></br>
    						<text className="text5">dev.to</text>

    				</div>

    	<div className="icons">
    		<IconButton className={classes.button} color="secondary" aria-label="Like">
        		<Favorite />
      		</IconButton>

      		<IconButton className={classes.button} color="primary" aria-label="Comment">
        		<Comment />
      		</IconButton>

      		<IconButton className={classes.button} aria-label="Share">
        		<Share />
      		</IconButton>
      		<IconButton className={classes.button} aria-label="E-Mail">
        		<Email />
      		</IconButton> 

      		     		
      	</div>
    		
    	</header>


    </div>
  );
}

export default App;
