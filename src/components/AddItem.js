import React from 'react'
import { TextField, Button } from '@material-ui/core'

const AddItem = ({ addItemValue, setAddItemValue, handler }) => {
    return (
        <>
            <TextField
                value={addItemValue}
                onChange={(e) => setAddItemValue(e.target.value)}
                label='Dodaj zadanie'
                style={{ width: '60%' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => handler(addItemValue)}
            >
                Dodaj zadanie do listy
            </Button>
        </>
    )
}

export default AddItem;
