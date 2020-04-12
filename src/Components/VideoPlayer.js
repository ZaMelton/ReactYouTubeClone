import React, {Fragment} from 'react';
import {Paper, Typography} from '@material-ui/core';

const VideoPlayer = ({video}) => {
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <Fragment>
            <Paper elevation={6} style={{height: '70vh'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="videoPlayer" src={videoSrc}></iframe>
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant="h6">{video.snippet.title}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.publishedAt}</Typography>
            </Paper>
        </Fragment>
    )
}

export default VideoPlayer;