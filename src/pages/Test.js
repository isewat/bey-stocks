import React from 'react';
import { Typography } from '@material-ui/core';
import TestBox from '../components/TestBox';


export const testConst=5;
export const testConst2={
    a:"Hallo",
    b:8,
    c:[3,6,7],
    d:{
        unterd:1
    }
};

const TestPage = () => {
    return(
        <div>
            <Typography variant="h1"> Hallo </Typography>
            <Typography variant="caption">
                {testConst}
                {testConst2.b}
                {testConst2.c[0]}
                {JSON.stringify(testConst2.c)}
            </Typography>
            <TestBox text="Wurst"/>
        </div>
    )
}

export default TestPage;