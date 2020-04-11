import React, {Component} from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
    }

    render(){
        return(
            <form>
                <TextField 
                    placeholder="Search..." 
                    value=''
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    style={{
                        width: '50vw',
                    }}
                />
            </form>
        )
    }
}

export default SearchBar;