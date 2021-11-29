import React from 'react'
import { Bar } from 'react-chartjs-2'
import './Style.css'


const Chart2 = () => {
    let delayed;

    return (
        <div className="chart2">
            <h3 className="chart-title">Login Analytics</h3>
            <Bar
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: "Login User",
                            data: [100, 400, 300, 550, 600, 50, 700, 600, 520, 340, 710, 222],
                            backgroundColor: '#f57c00',
                            fill: false,
                            borderColor: '#f57c00',
                            tension: 0.4

                        },
                        {
                            label: "Sign In User",
                            data: [300, 600, 200, 250, 345, 150, 200, 530, 310, 820, 210, 122],
                            backgroundColor: '#0288d1',
                            fill: false,
                            borderColor: '#0288d1',
                            tension: 0.4
                        }
                    ]
                }}
                options={{
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        },
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Month'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Users'
                            }
                        },

                    },
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Bar Chart'
                        },

                    },


                }}
            >

            </Bar>
        </div>
    )
}

export default Chart2
