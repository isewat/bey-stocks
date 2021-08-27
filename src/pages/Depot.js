import { render } from '@testing-library/react';
import React, { PureComponent, useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const colors = ["#900C3F", "#C70039", "#FF5733", "#FFC300", "#F40707"]

const colorpicker = (index) => {
    return colors[index % 5];
}

const Depot = () => {

    const [stockdata, setStockData] = useState([]);
    const [activeIndex, setActiveIndex]=useState(0)

    const renderActiveShape = (props) => {
        const {cx,cy,payload}=props;
        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle">
                    {`${payload.name}  ${payload.total} €`}
                </text>
            </g>
        )
    }

    


    useEffect(() => {
        fetch("http://localhost:8000/stocks")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setStockData(data.sort((a, b) => { return a.total < b.total ? -1 : 1 }));
            })
    }, [])

    return (

        <div classname="chart">
            <h1 id="Depot">Depot</h1>
            <PieChart width={400} height={300}>
                <Pie
                    dataKey="total"
                    nameKey="name"
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    isAnimationActive={true}
                    data={stockdata}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    label
                    onMouseEnter={(dummy,index)=>{
                        setActiveIndex(index) 
                    }}
                    >


                    {
                        stockdata.map((item, index) => (
                            <Cell key={`cell-${index}`} fill={colorpicker(index)} />
                        ))
                    }
                </Pie>
            </PieChart>

        </div>
    );

}
export default Depot;
