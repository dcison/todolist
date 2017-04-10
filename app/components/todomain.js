import React from 'react';
import ItemList from './itemlist.js'
class TodoMain extends React.Component {
    render() {
        if(this.props.todos.length == 0) {
            return (
                <div className="todo-empty">恭喜您，目前没有待办任务！</div>
            )
        } 
        else {
            return (
                <ul className="todo-main">
                    {
                        this.props.todos.map((todo, index) => {
                            return <ItemList text={todo.text} isDone={todo.isDone} index={index} {...this.props}/>
                        })
                    }
                </ul>
            )
        }
    }
}
module.exports = TodoMain;