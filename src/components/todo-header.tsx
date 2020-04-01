import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../store/actions';


const TodoHeader = () => {

    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    const handleInput = (e: any) => {
        if (title && e.keyCode === 13) {
            dispatch(addTaskAction(title));
            setTitle('');
        } else {
            setTitle(e.target.value);
        }
    }
    
    return <header className="header">
        <h1>todos</h1>
        <input className="new-todo" value={title}
            onChange={e => handleInput(e)}
            onKeyDown={e => handleInput(e)}
            placeholder="What needs to be done?" />
    </header>;
}

export default React.memo(TodoHeader);