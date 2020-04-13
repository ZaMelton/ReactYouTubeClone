import React from 'react';
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core';

const VideoList = ({allVideos, onVideoSelect}) => {
    const listOfVideos = allVideos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect}  key={id} video={video}/>)
    return (
        <Grid container spacing={5}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;