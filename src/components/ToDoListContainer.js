import React from 'react'
import { Paper, withStyles } from '@material-ui/core/';
import styles from './ToDoListContainer.styles';
import NavigationTabs from './Navigation/NavigationTabs';
import navigationItems from '../constants/navigationModes';
import ListContainer from './List/ListContainer';
import { AddCircle } from '@material-ui/icons';
import ToDoModal from './Modal/ToDoModal';
import { connect } from 'react-redux';
import { setIsModalOpen, addItem } from '../actions/index';




const TodoListContainer = ({ setIsModalOpen, isModalOpen, addItem, items, classes }) => {

    const [addItemValue, setAddItemValue] = React.useState('');
    const [itemList, setItemList] = React.useState([...items]);
    const [listMode, setListMode] = React.useState(navigationItems ? navigationItems[0].modeValue : undefined);

    const addItemHandler = value => {

        if (value.length) {

            addItem({
                id: items.length + 1,
                label: value,
                checked: false
            });

            setAddItemValue('');
        }
    }

    return <div className={classes.wrapper}>
        <Paper className={classes.paperContainer}>
            <NavigationTabs
                value={listMode}
                items={navigationItems}
                onChange={setListMode}
            />
            <ListContainer
                list={itemList}
                listMode={listMode}
                setItemList={setItemList}
            />
        </Paper>
        <ToDoModal
            addItemValue={addItemValue}
            setAddItemValue={setAddItemValue}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            handler={addItemHandler}
        />
        <div className={classes.button}>
            <AddCircle
                onClick={() => setIsModalOpen(true)}
                className={classes.icon}
            />
        </div>
    </div>
}

const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen,
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    setIsModalOpen: isOpen => dispatch(setIsModalOpen(isOpen)),
    addItem: item => dispatch(addItem(item))
})

const stylesHoc = withStyles(styles);
const connectHoc = connect(mapStateToProps, mapDispatchToProps);
export default connectHoc(stylesHoc(TodoListContainer));
