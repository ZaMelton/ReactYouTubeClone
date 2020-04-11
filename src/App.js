import React, {Component} from 'react';
import {Grid, AppBar, Typography, Toolbar} from '@material-ui/core';
import YouTube from './API/Youtube';
import './App.css';
import {SearchBar, VideoList, VideoPlayer} from './Components';

class App extends Component {

    handleSubmit = async (searchTerm) => {
        const api_key = process.env.REACT_APP_YOUTUBE_KEY;
        const response = await YouTube.get('search', {
            params: { 
                part: 'snippet',
                maxResults: 5,
                key: api_key,
                q: searchTerm,
            }
         });
        console.log(response);
    }

    render (){
        return(
            <div>
                <AppBar position='fixed' style={{backgroundColor: 'white'}}>
                    <Toolbar>
                        <Typography className='appName' variant="h6" noWrap style={{color:'black', width:'25%'}}>
                            YouTubeClone
                        </Typography>
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                    </Toolbar>
                </AppBar>
                <Grid justify="center" container spacing={10} style={{marginTop: '100px'}}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <Grid item xs={8}>
                                <VideoPlayer/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default App;