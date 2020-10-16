import React from 'react'
import { Paper, withStyles, Modal } from '@material-ui/core/';
import styles from './ToDoModal.styles'
import AddItem from '../AddItem';


const ToDoModal = ({ addItemValue, setAddItemValue, handler, onClose, isOpen, classes }) => {

    return <Modal
        className={classes.modalWrapper}
        open={isOpen}
        onClose={() => {
            setAddItemValue('');
            onClose();
        }}>
        <Paper className={classes.paperWrapper}>
            <AddItem
                addItemValue={addItemValue}
                setAddItemValue={setAddItemValue}
                handler={handler}
            />
        </Paper>
    </Modal>

}
const withHoc = withStyles(styles);
export default withHoc(ToDoModal);
