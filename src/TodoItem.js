import { Component } from "react";

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
                <input type="checkbox" className='input' onClick={this.handleClick} checked={this.props.checked} readOnly></input>
                <div onClick={this.handleClick} className='task'>
                    {this.props.item}
                </div>
                <div onClick={this.handleDelete} className="deleteBtn">
                    <svg className="icon">
                        <use xlinkHref="#icon-shanchu"></use>
                    </svg>
                </div>
            </div >
        )
    }
}
export default TodoItem