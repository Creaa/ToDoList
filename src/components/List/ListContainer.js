import React from 'react'
import { List } from '@material-ui/core/';
import ToDoItem from './ToDoItem'
import { FINISHED } from '../../constants/toDoModes';
import { connect } from 'react-redux';
import { updateList } from '../../actions/index'


const ListContainer = ({ listMode, items, updateList }) => {

    const itemChangeHandler = item => {

        const clonedList = [...items]
        const element = clonedList.find(el => el.id === item.id);
        element.checked = !element.checked;
        updateList([...clonedList]);
    }

    const removeHandler = item => {

        const filterList = items.filter(el => el.id !== item.id);
        updateList([...filterList]);
    }

    const getTodoList = () => {

        if (listMode === FINISHED) {

            return items.filter(el => el.checked);
        } else return items
    }

    return <List style={{ overflowX: 'scroll' }}>
        {getTodoList().map(item => (
            <ToDoItem
                item={item}
                key={item.id}
                onChange={itemChangeHandler}
                removeHandler={removeHandler}
            />
        ))}
    </List>
}

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateList: items => dispatch(updateList(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
