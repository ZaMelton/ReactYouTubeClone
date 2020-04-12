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

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <TextField 
                    onChange={this.handleChange}
                    placeholder="Search..." 
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    style={{
                        width:'50vw',
                    }}
                />
            </form>
        )
    }
}

export default SearchBar;