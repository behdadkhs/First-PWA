import React from 'react'
import { Line } from 'react-chartjs-2'
import './Style.css'


const Chart3 = () => {
    let delayed;

    return (
        <div className="chart3">
            <h3 className="chart-title">Login Analytics</h3>
            <Line
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: "Login User",
                            data: [100, 400, 300, 550, 600, 50, 700, 600, 520, 340, 710, 222],
                            backgroundColor: '#f57c00',
                            fill: false,
                            borderColor: '#f57c00',
                            tension: 0.4, animations: {
                                y: {
                                    duration: 4000,
                                    delay: 900
                                }
                            }

                        },
                        {
                            label: "Sign In User",
                            data: [300, 600, 200, 250, 345, 150, 200, 530, 310, 820, 210, 122],
                            backgroundColor: '#0288d1',
                            fill: false,
                            borderColor: '#0288d1',
                            tension: 0.4, animations: {
                                y: {
                                    duration: 4000,
                                    delay: 1100
                                }
                            }
                        }
                    ]
                }}
                options={{
                    animations: {
                        y: {
                            easing: 'easeInOutElastic',
                            from: (ctx) => {
                                if (ctx.type === 'data') {
                                    if (ctx.mode === 'default' && !ctx.dropped) {
                                        ctx.dropped = true;
                                        return 0;
                                    }
                                }
                            }
                        }
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
                            text: 'Line Chart'
                        },

                    },


                }}
            >

            </Line>
        </div>
    )
}

export default Chart3
