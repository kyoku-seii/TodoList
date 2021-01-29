import { Component, Fragment } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            taskList: ['1', '2', '3'],
            completedList: []
        }
    }

    handleInput = (e) => {
        this.setState(() => {
            return { inputValue: e.target.value }
        })
    }

    addTask = () => {
        if (this.state.inputValue !== '') {
            this.setState((prevState) => {
                return {
                    taskList: [...prevState.taskList, this.state.inputValue],
                    inputValue: ''
                }
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className='header'>
                    <div className='nav'>TodoList</div>
                    <input className='input' placeholder="添加todo" value={this.state.inputValue} onChange={this.handleInput} />
                    <button onClick={this.addTask}>添加</button>
                </div>
                <div className='taskList'>
                    {
                        this.state.taskList.map((item, index) => {
                            return (<div key={index}>{item}</div>)
                        })
                    }
                </div>
                <div className='completedList'>
                </div>
            </Fragment>
        )
    }

}

export default TodoList