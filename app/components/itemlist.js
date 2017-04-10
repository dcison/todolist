import React from 'react'

class ItemList extends React.Component {
    //改变任务是否已完成的状态
    handlerChange() {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }
    // 删除当前任务
    handlerDelete(){
        this.props.deleteTodo(this.props.index);
    }
    render() {
        let ifDone = this.props.isDone ? 'hasDone' : 'notDone';//通过isDone来改变classname以改变样式
        return (
            <li>
                <label>
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)} />
                <span className={ifDone}>{this.props.text}</span>
                </label>
                <button ref="delButton" onClick={this.handlerDelete.bind(this)}>删除</button>
            </li>
        )
    }
}

module.exports = ItemList;
