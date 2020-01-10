import React from "react";
import { ResponsiveLine } from '@nivo/line';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineGraph = ({ data /* see data tab */ }) => (

    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        xSfale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Weight (lb)',
            legendOffset: -55,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        lineWidth={3}
        pointSize={13}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        areaBaselineValue={10}
        useMesh={true}
    // legends={[
    //     {
    //         anchor: 'bottom-right',
    //         direction: 'column',
    //         justify: false,
    //         translateX: 100,
    //         translateY: 0,
    //         itemsSpacing: 0,
    //         itemDirection: 'left-to-right',
    //         itemWidth: 80,
    //         itemHeight: 20,
    //         itemOpacity: 0.75,
    //         symbolSize: 20,
    //         symbolShape: 'circle',
    //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
    //         effects: [
    //             {
    //                 on: 'hover',
    //                 style: {
    //                     itemBackground: 'rgba(0, 0, 0, .03)',
    //                     itemOpacity: 1
    //                 }
    //             }
    //         ]
    //     }
    // ]}
    />
)


export default LineGraph;