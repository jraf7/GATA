import { ResponsiveWaffle } from '@nivo/waffle'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const StatHabit = () => (
    <ResponsiveWaffle
        data={[
            {
                "id": "Read 10 min",
                "label": "Read 10 Min",
                "value": 13.03334892034305,
                "color": "#468df3"
            },
            {
                "id": "Workout 20 min",
                "label": "Workout 20 min",
                "value": 13.03334892034305,
                "color": "#ba72ff"
            },
            {
                "id": "Eat vegetables",
                "label": "Eat vegetables",
                "value": 16.75481706762016,
                "color": "#ba72ff"
            }
        ]}
        total={100}
        rows={2}
        columns={3}
        margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={11}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: -100,
                translateY: 0,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                itemTextColor: '#777',
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                            itemBackground: '#f7fafb'
                        }
                    }
                ]
            }
        ]}
    />
)

export default StatHabit;