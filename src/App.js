import React from 'react';
import { Grid} from '@material-ui/core';
import './App.css';
import Header from './Header';
import FormRow from './FormRow';

function App() {
	return (
		<div className="App">
			<Header></Header>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        
      </Grid>
		</div>
	);
}

export default App;
