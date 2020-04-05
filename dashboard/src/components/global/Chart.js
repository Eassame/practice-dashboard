import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


const DataChart = props => {
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={1}>
            <AreaChart
                // width={props.width} height={props.height}
                data={props.data}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" Label='name'/>
                <YAxis Label='name' Label="test"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default React.memo(DataChart);