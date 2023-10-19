import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
export default function LineChart(props) {
    // register the Chart js component 
    Chart.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    //   cerate a data for line chart
    const data = {
        labels: props.data.map((val) => { return val.Year }),

        datasets: [{

            data: props.data.map((val) => { return val.Medals }),

            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    // configuring  the line chart 
    const options = {
        plugins: {
            title: {
                display: true,
                text: "Medals Won By India IN Olympics"
            },
            legend: {
                display: false
            },

        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Medals'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Years'
                }
            }
        }


    }

    return (
        <div className="tabcontent">
            <Line options={options} data={data} />
        </div>
    )
}

