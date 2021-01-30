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
            <Fragment>
                <div onClick={this.handleClick}>{this.props.item}</div>
                <div onClick={this.handleDelete}>删除</div>
            </Fragment>
        )
    }
}
export default TodoItem