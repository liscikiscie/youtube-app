import React, { Component } from 'react';

class SearchBar extends Component {
    constructor( props ) {
        super(props);

        this.state = {term: 'Starting Value'};
    }

    handleChange = ( event ) => {
        this.setState({
            term: event.target.value
        });
        console.log(this.state.term);
    };

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    type="text"
                    placeholder="I've been here, Tony Halik"
                    onChange={this.handleChange}/>
            </div>
        );
    }
}

export default SearchBar;