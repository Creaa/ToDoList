import React from 'react'
import { ListItem, Typography, Checkbox } from '@material-ui/core/';
import { Delete } from '@material-ui/icons';

const ToDoItem = ({ item, onChange, removeHandler }) => {

    return <ListItem
        dense
        button
        onClick={() => onChange(item)}>
        <Checkbox
            checked={item.checked}
            onClick={e => {
                e.stopPropagation();
                onChange(item)
            }}
        />
        <Typography style={{ textDecoration: item.checked ? 'line-through' : null, maxWidth: '80%', overflow: 'hidden' }}>
            {item.label}
        </Typography>
        <Delete
            onClick={e => {
                e.stopPropagation();
                removeHandler(item);
            }}
            style={{ marginLeft: 'auto' }} />
    </ListItem>
}

export default ToDoItem;
