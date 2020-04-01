import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { IState } from '../store/state';
import { ITodoItem } from '../models/todo-item';
import { clearCompletedAction, setFilterAction } from '../store/actions';
import { FilterType } from '../models/filter-mode';

const TodoFooter = (props:any) => {

    const dispatch = useDispatch();
    const tasks: ITodoItem[] = useSelector((state: IState) => state.tasks);
    const currentFilter: FilterType = useSelector((state: IState) => state.filterType);
    const activeCount: number = tasks.filter((task: ITodoItem) => !task.isCompleted).length;

    useEffect(() => {
        const filterTypeValue: string = (props.match.params.filter || FilterType.all.toString());
        const routeFilter: FilterType = FilterType[filterTypeValue as keyof typeof FilterType];
        if (currentFilter !== routeFilter) {
            dispatch(setFilterAction(routeFilter));
        }
    }, [props.match.params.filter, currentFilter, dispatch]);

    return tasks.length > 0 ? <footer className="footer">
        <span className="todo-count">{activeCount} items left</span>
        <ul className="filters">
            <li>
                <NavLink to="/" exact={true} activeClassName={'selected'} >All</NavLink>
            </li>
            <li>
                <NavLink to="/active" activeClassName={'selected'} >Active</NavLink>
            </li>
            <li>
                <NavLink to="/completed" activeClassName={'selected'} >Completed</NavLink>
            </li>
        </ul>
        {tasks.length - activeCount > 0 ?
            <button onClick={() => dispatch(clearCompletedAction())} className="clear-completed">Clear completed</button> : null}
    </footer> : null;
}

export default withRouter(TodoFooter);
