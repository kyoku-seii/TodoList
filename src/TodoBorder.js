import { Component } from "react";
import TodoItem from './TodoItem'

class TodoBorder extends Component {

    render() {
        return (
            <div className='border'>
                <div className='wrapper'>
                    <h2>{this.props.title}</h2>
                    <div className='number'>{this.props.taskList.length}</div>
                </div>
                <div>
                    {
                        this.props.taskList.map((item, index) => {
                            return <TodoItem item={item} key={index} index={index} checked={this.props.checked}
                                handleDelete={this.props.handleDelete} handleClick={this.props.handleClick} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TodoBorder