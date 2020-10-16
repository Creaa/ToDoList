import React from 'react'
import { Tabs, Tab, makeStyles, Paper } from '@material-ui/core';
import styles from './NavigationTabs.styles';

const useStyles = makeStyles(() => styles);


const NavigationTabs = ({ value, items, onChange }) => {

    const classes = useStyles();

    return <Paper
        elevation={0}
        className={classes.wrapper}>
        <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            variant='fullWidth'
        >
            {items.map((el, k) => <Tab
                key={k}
                onClick={() => onChange(el.modeValue)}
                label={el.component()}
                value={el.modeValue} />)}
        </Tabs>
    </Paper>
}


export default NavigationTabs;
