import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
    }

    render(){
        return(
            <h1>Pretend this is a search bar</h1>
        )
    }
}

export default SearchBar;