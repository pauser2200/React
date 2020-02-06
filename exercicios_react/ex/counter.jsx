import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, zerar,  stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged}
            value={props.counter.step} type='number' />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
        <button onClick={props.zerar}>Zerar</button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, zerar , stepChanged }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)