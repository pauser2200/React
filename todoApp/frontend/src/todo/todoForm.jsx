import React from 'react'
import Grid from  '../template/grid'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {changeDescription, search} from './todoActions'

import IconButton from  '../template/iconButton'


class TodoForm extends React.Component {
    constructor(props){
        super(props)

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentDidMount() {
        this.props.search()
    }

    keyHandler(e) {

        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    render() {
        return (
            <div>
                <div role='form' className='todoForm'>

                    <Grid cols='12 9 10'>
                        <input id='description' className='form-control' placeholder='Adcione uma tarefa'
                               value={this.props.description}
                               onChange={this.props.changeDescription}
                               onKeyUp={this.keyHandler}
                        />
                    </Grid>

                    <Grid cols='12 3 2'>
                        <IconButton style='primary' onClick={this.props.handleAdd} icon='plus'/>
                        <IconButton style='info'    onClick={this.props.handleSearch} icon='search'/>
                        <IconButton style='default' onClick={this.props.handleClear} icon='close'/>
                    </Grid>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search}, dispatch);
export default  connect(mapStateToProps, mapDispatchToProps)(TodoForm)



