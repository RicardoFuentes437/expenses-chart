import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import PropTypes from 'prop-types';

const BarChart = ({info}) => {

    const d = new Date();
    let day = d.getDay();

    const labels = info.map((day) => day.day);
    const data = info.map((day) => day.amount);

    const currentDay = () => {
        switch (day) {
            case 0:
                return "sun"
            case 1:
                return "mon";
            case 2:
                return "tue";
            case 3:
                return "wed";
            case 4:
                return "thu";
            case 5:
                return "fri";
            case 6:
                return "sat";
            default:
                return;
        }
    }

    const chartData = {
        labels: labels,
        datasets: [
        {
            label: null,
            borderRadius: 5,
            backgroundColor: labels.map((value) => value === currentDay() ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)' ),
            hoverBackgroundColor: labels.map((value) => value === currentDay() ? 'rgb(180,223,229)' : 'rgb(255,155,134)' ),
            data: data,
        },
        ],
    };

    const options = {
        scales: {
            y: {
                display: false
            },
            x: {
                grid: {
                    display: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                displayColors: false,
                callbacks: {
                    title: function(){
                        return '';
                    }
                }
            }
        },
    };

    return (
        <div id="bar-chart-section">
            <Bar data={chartData} options={options}></Bar>
        </div>
    );
};

BarChart.propTypes = {
    info: PropTypes.array.isRequired
};

export default BarChart;
