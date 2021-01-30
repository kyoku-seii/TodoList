import { Component, Fragment } from "react";

class TodoItem extends Component {

    handleDelete = () => {
        this.props.handleDelete(this.props.index)
    }
    handleClick = () => {
        this.props.handleClick(this.props.index)
    }

    render() {
        return (
            <div className='item'>
                <input type="checkbox" className='input' onClick={this.handleClick} checked={this.props.checked}></input>
                <div onClick={this.handleClick} className='task'>
                    {this.props.item}
                </div>
                <div onClick={this.handleDelete} className="deleteBtn">删除</div>
            </div>
        )
    }
}
export default TodoItem