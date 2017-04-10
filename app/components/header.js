import React from 'react'

class TodoHeader extends React.Component {
    addItem_1(e) {
        if(e.keyCode==13){
        let value = e.target.value;
        if(!value) return false;
        let newItem = {
            text: value,
            isDone: false
        };
        e.target.value = '';
        this.props.addTodo(newItem);
        }
    }
    addItem_2(){
        let value = this._inputElement.value;
        if(!value) return false; //无文本则什么也不做
        let newItem = {
            text: value,
            isDone: false
        };
        this._inputElement.value = '';//把输入框清空
        this.props.addTodo(newItem);
    }
    //获取表单内容，用addTodo添加到todos里
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.addItem_1.bind(this)} ref={(a) => this._inputElement = a} type="text" placeholder="请输入你的任务名称"/>
                <button type="submit" onClick={this.addItem_2.bind(this)}>add</button>
            </div>
        )
    }
}
module.exports = TodoHeader;