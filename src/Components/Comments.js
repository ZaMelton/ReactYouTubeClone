import React from 'react';
import {Grid, Typography} from '@material-ui/core';

const Comments = ({video}) => {
    if(!video) return null
    const videoTitle = video.snippet.title;
    return (
        <Grid item xs={8} spacing={5} style={{marginTop:'2%'}}>
            <Typography variant="subtitle1">{videoTitle}'s Comments</Typography>
        </Grid>
    )
}

export default Comments;