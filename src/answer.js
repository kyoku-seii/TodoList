import { Component, Fragment } from "react"
import TodoItem from './answer2'

import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['学习英语', '学习编程']
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        // this.getTodoItem = this.getTodoItem.bind(this)
    }

    handleInputChange(e) {
        this.setState(() => ({
            inputValue: e.target.value
        }))
    }
    handleBtnClick(e) {
        this.setState((prevState) => ({
            list: [...prevState.list, this.state.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        })
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (<TodoItem content={item} key={index} index={index} deleteItem={this.handleItemDelete} />)
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input className='input' value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList