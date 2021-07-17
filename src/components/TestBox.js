import React from 'react';
import {Typography} from '@material-ui/core';

const TestBox=({text})=>{
    return(
        <div style={{width:200,height:100, backgroundColor:'yellow'}}>
            <Typography variant="h6">{text}</Typography>
        </div>
    )
}

export default TestBox;