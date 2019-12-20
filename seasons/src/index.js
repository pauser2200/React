import React from 'react';
import  ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null, erroMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (location) => {

                this.setState({lat: location.coords.latitude, long: location.coords.longitude});

            },
            (err) => {
             this.setState({erroMessage: err.message});
            }
        );
    }

    render() {

        if(this.state.erroMessage && !this.state.lat){
            return <div> Error: {this.state.erroMessage}</div>
        }

        if(!this.state.erroMessage && this.state.lat){
            return <div> Latitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));