import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../components/_dashboard/Title';

/**Displays line graph of price over time**/
// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData('10/23', 200),
    createData('10/24', 215),
    createData('10/25', 225),
    createData('10/26', 250),
    createData('10/27', 275),
    createData('10/28', 300),
    createData('10/29', 325),
    createData('10/30', 350),
    createData('10/31', undefined),
];

export default function Chart(info) {
    const theme = useTheme();
    //console.log(info);

    return (
        <React.Fragment>
            <Title>Today</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="time"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: 'middle',
                                fill: theme.palette.text.primary,
                                ...theme.typography.body1,
                            }}
                        >
                            Price ($)
                        </Label>
                    </YAxis>
                    <Line
                        isAnimationActive={true}
                        type="monotone"
                        dataKey="amount"
                        stroke={theme.palette.primary.dark}
                        dot={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}