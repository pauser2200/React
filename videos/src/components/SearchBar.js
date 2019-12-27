import React from 'react';
import axios from 'axios';
class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
    };

    render() {

        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">

                        <label>Video search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;