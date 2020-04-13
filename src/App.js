import React, {Component} from 'react';
import {Grid, AppBar, Typography, Toolbar} from '@material-ui/core';
import YouTube from './API/Youtube';
import './App.css';
import {SearchBar, VideoList, VideoPlayer, Comments} from './Components';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        }
    }

    handleSubmit = async (searchTerm) => {
        const api_key = process.env.REACT_APP_YOUTUBE_KEY;
        const response = await YouTube.get('search', {
            params: { 
                part: 'snippet',
                maxResults: 8,
                key: api_key,
                q: searchTerm,
            }
         });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    }

    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    render (){
        const { videos, selectedVideo} = this.state;
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
                <Grid justify="center" container spacing={10} style={{marginTop: '50px'}}>
                    <Grid item xs={12}>
                        <Grid container spacing={5}>
                            <Grid item xs={8}>
                                <VideoPlayer video={selectedVideo}/>
                                <Comments video={selectedVideo}/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList allVideos={videos} onVideoSelect={this.handleVideoSelect}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default App;