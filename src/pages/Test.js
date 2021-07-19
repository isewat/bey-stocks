import React, { useState } from 'react';
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
    const [activity, setactivity] = useState([
        { title: "Apple", price: 122, volume: "3", ISIN: 1234},
        { title: "Microsoft", price: 233, volume: "7", ISIN: 2345},
        { title: "Amazon", price: 2890, volume: "15", ISIN: 3456}
    ])
    return(
        <div className="stocks">
            {activity.map((activity) => (
                <div className="activity" key={activity.ISIN}>
                    <h2> {activity.title}</h2>
                    <p> price: {activity.price} € // volume: {activity.volume} Shares // Complete: {activity.volume * activity.price} € </p>
                </div>
            ))}
            
        </div>
    )
}

export default TestPage;