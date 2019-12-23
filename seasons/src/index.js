import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';


class App extends React.Component {


    state = {lat: null, erroMessage: ''};

    //metodo inicial para instanciar ou inicializar objetos ou regras
    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({erroMessage: err.message})
        );
    }


    contentRender() {

        if (this.state.erroMessage && !this.state.lat) {
            return <div> Error: {this.state.erroMessage}</div>
        }

        if (!this.state.erroMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request!"/>

    }

    //Metodo de renderização dos componentes uso obrigatório
    render() {

        return <div className="border red">{this.contentRender()}</div>
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));