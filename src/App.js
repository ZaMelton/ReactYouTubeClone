import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import YouTube from './API/Youtube';
import {SearchBar, VideoList, VideoPlayer} from './Components';

class App extends Component {
    render (){
        return(
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            {/* SEARCH BAR */}
                        </Grid>
                        <Grid item xs={8}>
                            {/* VIDEO PLAYER */}
                        </Grid>
                        <Grid item xs={4}>
                            {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;