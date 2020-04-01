import { IState } from "./state";
import { FilterType } from "../models/filter-mode";
import { actionTypes } from "./action-types";
import { Action } from "./actions";
import { ITodoItem } from "../models/todo-item";

const initialState: IState = {
    tasks: [],
    filterType: FilterType.all
};

const rootReducer = (state: IState = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return { ...state, tasks: [...state.tasks, { id: Date.now(), title: action.payload, isCompleted: false}] }
        case actionTypes.REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter((task: ITodoItem) => task.id !== action.payload) }
        case actionTypes.EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task: ITodoItem) => task.id !== action.payload
                    ? task
                    : { ...task, title: action.payload })
            }
        case actionTypes.TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task: ITodoItem) => task.id !== action.payload
                    ? task
                    : { ...task, isCompleted: !task.isCompleted })
            }
        case actionTypes.TOGGLE_ALL:
            return { ...state, tasks: state.tasks.map((task: ITodoItem) => ({ ...task, isCompleted: action.payload })) }
        case actionTypes.SET_FILTER:
            return state.filterType === action.payload ? state : { ...state, filterType: action.payload };
        case actionTypes.CLEAR_COMPLETED:
            return { ...state, tasks: state.tasks.filter((task: ITodoItem) => !task.isCompleted) }
        default:
            return state;
    }
}
export default rootReducer;