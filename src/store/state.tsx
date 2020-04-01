import { ITodoItem } from "../models/todo-item";
import { FilterType } from "../models/filter-mode";

export interface IState {
    tasks: ITodoItem[];
    filterType: FilterType
}