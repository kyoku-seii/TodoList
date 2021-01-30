import { Component, Fragment } from "react";
import TodoItem from './TodoItem'

class TodoBorder extends Component {

    render() {
        return (
            <Fragment>
                <div>{this.props.title}</div>
                <div>{this.props.taskList.length}个</div>
                <div>
                    {
                        this.props.taskList.map((item, index) => {
                            return <TodoItem item={item} key={index} index={index}
                                handleDelete={this.props.handleDelete} handleClick={this.props.handleClick} />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default TodoBorder