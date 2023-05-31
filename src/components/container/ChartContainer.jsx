import React from 'react';
import BarChart from '../pure/BarChart';

import data from '../../data.json';

import '../../styles/chartContainer/chartContainerStyles.css';

const ChartContainer = () => {
    return (
        <div id="chart-container">
            <p id="chart-title">Spending - Last 7 days</p>
            <BarChart info={data}></BarChart>
            <hr id="divider-line"></hr>
            <div id="bottom-section">
                <div id="left-section">
                    <p id="total-label">Total this month</p>
                    <p id="total">$478.33</p>
                </div>
                <div id="right-section">
                    <p id="percentage">+2.4%</p>
                    <p id="percentage-label">From last month</p>
                </div>
            </div>
        </div>
    );
}

export default ChartContainer;
