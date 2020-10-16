import defaultItems from '../constants/defaultItems';
import { IS_MODAL_OPEN, ADD_ITEM, UPDATE_LIST } from '../constants/actions';

const initialState = {
    items: defaultItems,
    isModalOpen: false,
}

const toDoListReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_MODAL_OPEN:
            return {
                ...state,
                isModalOpen: action.isOpen,
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case UPDATE_LIST:
            return {
                ...state,
                items: [...action.items]
            }
        default:
            return state
    }
}

export default toDoListReducer;