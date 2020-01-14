import React, {Component} from 'react'
import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'
import '../components/Button.css'


const initialStatae = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialStatae };



    clearMemory = () => {

        this.setState({ ...initialStatae })
    };

    setOperation = operation => {
        console.log(operation)
    };

    addDigit = n => {
        if (n === '.' && this.state.displayValue.includes('.')){
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if (n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }

    };



    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={() => this.clearMemory()} triple/>
                <Button label="/" click={operation => this.setOperation(operation)} operation/>
                <Button label="7" click={n => this.addDigit(n)}/>
                <Button label="8" click={n => this.addDigit(n)}/>
                <Button label="9" click={n => this.addDigit(n)}/>
                <Button label="*" click={operation => this.setOperation(operation)} operation/>
                <Button label="4" click={n => this.addDigit(n)}/>
                <Button label="5" click={n => this.addDigit(n)}/>
                <Button label="6" click={n => this.addDigit(n)}/>
                <Button label="-" click={operation => this.setOperation(operation)} operation/>
                <Button label="1" click={n => this.addDigit(n)}/>
                <Button label="2" click={n => this.addDigit(n)}/>
                <Button label="3" click={n => this.addDigit(n)}/>
                <Button label="+" click={operation => this.setOperation(operation)} operation/>
                <Button label="0" click={n => this.addDigit(n)} double/>
                <Button label="." click={n => this.addDigit(n)}/>
                <Button label="=" click={operation => this.setOperation(operation)} operation/>
            </div>
        )
    }

}