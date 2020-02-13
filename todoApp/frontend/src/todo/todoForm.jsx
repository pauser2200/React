import React from 'react'
import Grid from  '../template/grid'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {add, changeDescription, search, clear} from './todoActions'

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
        const { add, search, description, clear} = this.props
        if (e.key === 'Enter'){
            e.shiftKey ? search(description) : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description, clear } = this.props
        return (
            <div>
                <div role='form' className='todoForm'>

                    <Grid cols='12 9 10'>
                        <input id='description' className='form-control' placeholder='Adcione uma tarefa'
                               value={description}
                               onChange={this.props.changeDescription}
                               onKeyUp={this.keyHandler}
                        />
                    </Grid>

                    <Grid cols='12 3 2'>
                        <IconButton style='primary' onClick={ () => add(description)} icon='plus'/>
                        <IconButton style='info'    onClick={search} icon='search'/>
                        <IconButton style='default' onClick={clear} icon='close'/>
                    </Grid>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear}, dispatch);
export default  connect(mapStateToProps, mapDispatchToProps)(TodoForm)



