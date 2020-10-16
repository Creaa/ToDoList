import { IS_MODAL_OPEN, ADD_ITEM, UPDATE_LIST } from "../constants/actions";

export const setIsModalOpen = isOpen => ({
    type: IS_MODAL_OPEN,
    isOpen
})

export const addItem = item => ({
    type: ADD_ITEM,
    item
})

export const updateList = items => ({
    type: UPDATE_LIST,
    items: items
})