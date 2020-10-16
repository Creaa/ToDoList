import React from 'react';
import { FormatListBulleted, PlaylistAddCheck } from '@material-ui/icons';
import { ALL, FINISHED } from './toDoModes';

export default [
    {
        modeValue: ALL,
        component: () => <FormatListBulleted />
    },
    {
        modeValue: FINISHED,
        component: () => <PlaylistAddCheck />
    }
];