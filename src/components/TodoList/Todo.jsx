import React, { Component } from 'react'
import './Todolist.css'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'

export default class Todo extends Component {



    clickHandler(id) {
        this.props.onRemoveTodo(id)
    }

    editclickHandler(id) {
        this.props.onEdit(id)
    }


    render() {
        return (
            // 'completed' class for completed todos
            <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.title}</li>

                <button className="check-btn"
                    onClick={this.editclickHandler.bind(this, this.props.id)}
                >
                    <i className="fas fa-check" aria-hidden="true"></i>
                    <AiOutlineCheckSquare />
                </button>

                <button className="trash-btn"
                    onClick={this.clickHandler.bind(this, this.props.id)}
                >
                    <i className="fas fa-trash" aria-hidden="true"></i>
                    <BsFillTrash3Fill />
                </button>
            </div>
        )
    }
}