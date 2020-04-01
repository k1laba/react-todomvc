import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todo-item';
import { ITodoItem } from '../models/todo-item';
import { IState } from '../store/state';
import { FilterType } from '../models/filter-mode';

const TodoList = () => {
    const filter: FilterType = useSelector((state: IState) => state.filterType);
    let tasks: ITodoItem[] = useSelector((state: IState) => state.tasks);
    if (filter !== FilterType.all) {
        tasks = tasks.filter((task: ITodoItem) => task.isCompleted === (filter === FilterType.completed));
    }
    
    return <ul className="todo-list">
        {tasks.map((task: ITodoItem) => <TodoItem key={task.id} task={task}></TodoItem>)}
    </ul>;
}

export default TodoList;