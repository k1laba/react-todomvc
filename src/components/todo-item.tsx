import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTaskAction, editTaskAction, toggleTaskAction } from '../store/actions';

const TodoItem = (props: any) => {

    const [isEditMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(props.task.title);
    const dispatch = useDispatch();

    const removeHandler = (id: number): void => {
        dispatch(removeTaskAction(id));
    }
    const editHandler = (e: any): void => {
        if (!!title && e.keyCode === 13) {
            dispatch(editTaskAction(e.target.value));
            setEditMode(false);
        }
        setTitle(e.target.value);
    }

    const getWrapperClassNames = () => {
        let result: string = isEditMode ? 'editing' : '';
        if (props.task.isCompleted) { result += ' completed'; }
        return result;
    }

    return <li className={getWrapperClassNames()}>
        {!isEditMode ? <div className="view">
            <input type="checkbox" checked={props.task.isCompleted} onChange={() => dispatch(toggleTaskAction(props.task.id))} className="toggle" />
            <label onDoubleClick={() => setEditMode(true)}>{title}</label>
            <button onClick={() => removeHandler(props.task.id)} className="destroy"></button>
        </div> : null}
        {isEditMode ? <input className="edit"
            value={title}
            onChange={(e) => editHandler(e)}
            onKeyDown={(e) => editHandler(e)}
            type="text" /> : null}
    </li>;
}

export default React.memo(TodoItem);