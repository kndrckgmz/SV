import React from 'react';
import Chart from "react-google-charts";

const WG = () => {
            
    var sunday = 0;
    var monday = 55;
    var tuesday = 54;
    var wednesday = 40;
    var thursday = 42;
    var friday = 25;
    var saturday = 20;
    var accent= '#48caaf';

    return (
            <Chart
            className="charts"
            chartType="LineChart"
            loader={<div class="loader">Loading...</div>}
            data={[
                ['x', 'Attended'],
                ['S', sunday],
                ['M', monday],
                ['T', tuesday],
                ['W', wednesday],
                ['T', thursday],
                ['F', friday],
                ['S', saturday],    
              ]}
            options={{

            legend:'none',

            margin:'none',
            
            backgroundColor: 'transparent',

            curveType: 'function',

            hAxis: {
                title: 'Week',

                titleTextStyle: {
                    color: '#d2d2d2'
                  },

                baselineColor:'#48caaf',

                gridlines: {
                    color: 'transparent',
                            },
                textStyle:{
                    color:'#d2d2d2',
                },    
            },
            vAxis: {
                title: 'Students',

                titleTextStyle: {
                    color: '#d2d2d2'
                  },

                baselineColor: accent,  

                gridlines: {
                    color: 'transparent',
                            },
                textStyle:{
                    color:'#d2d2d2',
                          },            
                    },

            series: {
                0: { color: accent },
                    }

                }}
            />
        );
    };

export default WG;