import { render } from '@testing-library/react';
import React, { PureComponent, useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const colors = ["#0076CE", "#0270C3", "#0365B0", "#1F72B1", "#2F81BF", "#B15E1F", "#C86F2B","#DA803A", "#EF8F45"]

const colorpicker = (index) => {
    return colors[index % colors.length];
}

const Depot = () => {

    const [stockdata, setStockData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0)

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;

        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 7) * cos;
        const sy = cy + (outerRadius + 7) * sin;
        const mx = cx + (outerRadius + 15) * cos;
        const my = cy + (outerRadius + 15) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text style={{ fontWeight: "bold", textShadow: "1px 1px #Cbdae1" }} x={cx} y={cy - 10} dy={8} textAnchor="middle">
                    {payload.name}
                </text>
                <br></br>
                <text x={cx} y={cy + 13} dy={8} textAnchor="middle">
                    {`${payload.total}€`}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.name}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>

            </g >
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
            <PieChart width={550} height={300}>
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
                    onMouseEnter={(dummy, index) => {
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
