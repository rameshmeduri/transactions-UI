import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const TrPieChart = ({ chartData }) => {
    console.log(chartData);
    let len = Object.keys(chartData).length;
    if (len) {
        let arr = [];
        for (let key in chartData) {
            arr.push({ name: key, transactions: chartData[key] });
        }
        return (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        dataKey="transactions"
                        isAnimationActive={false}
                        data={arr}
                        cx="35%"
                        cy="50%"
                        outerRadius={80}
                        fill="#3367d6"
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        );
    } else {
        return null;
    }
};
export default TrPieChart;
