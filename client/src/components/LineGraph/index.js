import React, { Component } from 'react';
import { Chart } from 'react-charts'
import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart
} from "react-timeseries-charts";
import { TimeSeries, TimeRange } from "pondjs";

class LineGraph extends Component {

    render() {

        return (

            <ChartContainer timeRange={series1.timerange()} width={800}>
                <ChartRow height="200">
                    <YAxis id="axis1" label="AUD" min={0.5} max={1.5} width="60" type="linear" format="$,.2f" />
                    <Charts>
                        <LineChart axis="axis1" series={series1} column={["aud"]} />
                        <LineChart axis="axis2" series={series2} column={["euro"]} />
                    </Charts>
                    <YAxis id="axis2" label="Euro" min={0.5} max={1.5} width="80" type="linear" format="$,.2f" />
                </ChartRow>
            </ChartContainer>


        );



    }


}


export default LineGraph;
























