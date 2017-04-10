import React from 'react'

class ListFooter extends React.Component{
    handlerSelectAll(e) {
        this.props.changeTodoState(null, e.target.checked, true);    // true表示全部操作。
    }
    //删除全部已完成的任务
    handlerDeleteDone() {
        this.props.clearDone();
    }
    render(){
        return(
            <div className="todo-footer">
            <label>
                <input type="checkbox" checked={this.props.isAllChecked} onChange={this.handlerSelectAll.bind(this)} />全选
            </label>
            <span><span className="text-success">已完成{this.props.todoDoneCount}</span> 全部{this.props.todoCount}</span>
            <button className="btn btn-danger" onClick={this.handlerDeleteDone.bind(this)}>清除已完成任务</button>
            </div>
        )
    }
}
module.exports = ListFooter;