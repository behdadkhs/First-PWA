import React from 'react'
import './Style.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {
    const data = [
        {
            name: 'Jan',
            "Active User": 4000,
            pv: 12400,
            amt: 2400,
        },
        {
            name: 'Feb',
            "Active User": 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            "Active User": 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            "Active User": 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            "Active User": 100,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            "Active User": 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            "Active User": 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            "Active User": 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Sep',
            "Active User": 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Oct',
            "Active User": 100,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Nov',
            "Active User": 8390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Dec',
            "Active User": 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div>
            <h3 className="chart-title">User Analytics</h3>
            <ResponsiveContainer aspect={4 / 1}>
                <LineChart data={data} >
                    <XAxis dataKey="name" stroke="rgba(112, 116, 119, 0.5)" />
                    <YAxis dataKey="pv" />

                    <Line type="monotone" dataKey="Active User" stroke="#01bf71" />
                    <Tooltip />
                    <CartesianGrid stroke="rgba(112, 116, 119, 0.5)" strokeDasharray="5 5" />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Chart
