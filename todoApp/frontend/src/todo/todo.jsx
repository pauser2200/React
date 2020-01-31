import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


export default class Todo extends  Component {

    constructor(props){
        super(props)
        this.state = {description: '', list: []}
    }


    handleAddClick(){
        console.log(this.state.description)
    }

    handleChange(e){
        this.setState( {...this.state, description: e.target.value })
    }



    render() {
        return (
            <div>
              <PageHeader name='Tarefas ' small='Cadastro'/>
              <TodoForm descripition={this.state.description}
                        handleAdd={this.handleAddClick.bind(this)}
                        handleChange={this.handleChange.bind(this)}
                />
              <TodoList />
            </div>
        )
    }
}