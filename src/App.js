import React, {Component} from 'react';
import {Grid, AppBar, Typography, Toolbar} from '@material-ui/core';
import YouTube from './API/Youtube';
import './App.css';
import {SearchBar, VideoList, VideoPlayer, Comments, ProgrammingSection} from './Components';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            defaultVideos: [],
            selectedVideo: null,
        }
    }

    componentDidMount() {
        this.setDefaultVideos('programming');
    }

    setDefaultVideos = async (videoSearch) => {
        const api_key = process.env.REACT_APP_YOUTUBE_KEY;
        const response = await YouTube.get('search', {
            params: { 
                part: 'snippet',
                maxResults: 20,
                key: api_key,
                q: videoSearch,
            }
        });
        this.setState({
            defaultVideos: response.data.items,
        });
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

    handleVideoSelect = async (video) => {
        const api_key = process.env.REACT_APP_YOUTUBE_KEY;
        const response = await YouTube.get('search', {
            params: { 
                part: 'snippet',
                maxResults: 8,
                key: api_key,
                q: video.snippet.title,
            }
        });
        this.setState({ selectedVideo: video, videos: response.data.items });
        console.log(response.data.items[3]);
    }

    render (){
        const { videos, defaultVideos, selectedVideo} = this.state;

        if(!selectedVideo) {
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
                    <Grid container direction="column" spacing={5} style={{marginTop: '75px'}}>
                        <Typography className='appName' variant="h6" style={{color:'black', width:'25%', marginLeft:'2%'}}>
                            Programming Videos
                        </Typography>
                    </Grid>
                    <Grid contiainer direction="row" item xs={4} style={{marginLeft:'1%', marginTop:'1%'}}>
                        <ProgrammingSection allVideos={defaultVideos} onVideoSelect={this.handleVideoSelect}/>
                    </Grid>
                </div>
            );
        }
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