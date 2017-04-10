import React from "react";
import TodoHeader from './header.js';//输入栏组件
import TodoItems from './todomain.js';//展示栏组件
import TodoFooter from './footer.js';//底部栏组件

class TodoList extends React.Component {
    constructor() { 
        super(); 
        this.state = { 
            todos: [],//设定以后存储两种元素，text 和 isDone
            isAllChecked: false
        };
    }
   //构造函数，初始一个空列表todos，一个布尔值为false，用于检查是否已完成
    allChecked() {
        let isAllChecked = false;//默认没有全部检查
        if (this.state.todos.every(todo => todo.isDone)) {
            isAllChecked = true;
            //todos中的每一项的isDone为True时isAllChecked才为true;
        }
        this.setState({  
            todos: this.state.todos,
            isAllChecked: isAllChecked
        });//更新属性
    }

    addTodo(todoItem){
        this.state.todos.push(todoItem);  //将新添加的
        this.allChecked();
    }

    deleteTodo(index){
        this.state.todos.splice(index, 1);//删除操作
        this.setState({todos: this.state.todos});  //改变状态
    }
    // 清除已完成的任务，传递给Footer组件的方法
    clearDone(){
        let todos = this.state.todos.filter(todo => !todo.isDone);   
        //过滤掉数组中todo.isDone为true的item。
        this.setState({
            todos: todos,
            isAllChecked: false
        });
    }
    // 改变任务状态，传递给TodoItem和Footer组件的方法
    changeTodoState(index, isDone, isChangeAll=false){   //初始化isChangeAll为false
        if(isChangeAll){     //全部操作
            this.setState({
                todos: this.state.todos.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            });
        }
        else{   
            this.state.todos[index].isDone = isDone;
            this.allChecked();//每次改变都检查是否每一项都完成了
        }
    }
    //组件渲染方法

    render() {
        let info = {
            isAllChecked: this.state.isAllChecked,
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0
        };
        return (
            <div className="todoList">
                <TodoHeader addTodo={this.addTodo.bind(this)} />
                <TodoItems todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)} />
                <TodoFooter {...info} changeTodoState={this.changeTodoState.bind(this)} clearDone={this.clearDone.bind(this)} />
            </div>
        )
    }
}
module.exports = TodoList;//导出主组件
