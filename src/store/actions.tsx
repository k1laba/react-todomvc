import { FilterType } from "../models/filter-mode";
import { actionTypes } from "./action-types";

export interface Action {
    type: string;
    payload?: any;
}

export const addTaskAction = (title: string) : Action => {
    return {
        type: actionTypes.ADD_TASK,
        payload: title
    }
}

export const editTaskAction = (title: string) : Action => {
    return {
        type: actionTypes.EDIT_TASK,
        payload: title
    }
}

export const removeTaskAction = (id: number) : Action => {
    return {
        type: actionTypes.REMOVE_TASK,
        payload: id
    }
}

export const toggleTaskAction = (id: number) : Action => {
    return {
        type: actionTypes.TOGGLE_TASK,
        payload: id
    }
}

export const toggleAllAction = (toggle: boolean) : Action => {
    return {
        type: actionTypes.TOGGLE_ALL,
        payload : toggle
    }
}

export const clearCompletedAction = () : Action => {
    return {
        type: actionTypes.CLEAR_COMPLETED
    }
}

export const setFilterAction = (filterType: FilterType) => {
    return {
        type: actionTypes.SET_FILTER,
        payload: filterType
    }
}