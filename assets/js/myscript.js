
        
        //BAR CHART
        var data = [{
            'name': "MON",
            'value': 7
        }, {
            'name': "TUE",
            'value': 19
        }, {
            'name': "WED",
            'value': 12
        }, {
            'name': "THUR",
            'value': 14
        }, {
            'name': "FRI",
            'value': 23
        }, {
            'name': "SAT",
            'value': 8
        } ];


        // Set the dimensions of our chart to be displayed 
        var barsWidth = 260,
            barsHeight = 170,
            axisMargin = 50;

        var chartHeight = barsHeight + axisMargin,
            chartWidth = barsWidth + axisMargin;


        // Select the chart element on the page so we can reference it in code
        // Also set the width and height attributes of the chart SVG 
        var chart = d3.select('#chart')
            .attr('width', chartWidth + 100)
            .attr('height', chartHeight);

        // Create a linear scale for our y-axis to map datapoint values to pixel heights of bars
        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) {
                // return the value property of each datapoint so the max function can compare
                return d.value;
            })])
            .rangeRound([barsHeight, 0]);

        // Create a scale that returns the bands each bar should be in along the x-axis
        let xScale = d3.scaleBand()
            .domain(
                data.map(
                    function(d) {
                        // For each datapoint in our data array
                        // Return the name property into our new domain array
                        return d.name;
                    }
                )
            )
            .rangeRound([0, barsWidth])
            .padding(0.1);

        // Create an SVG group that we will add the individual bar elements of our chart to
        var bars = chart.append('g')
            .attr('id', "bars-container");

        // Bind the data to our .bars svg elements
        // Create a rectangle for each data point and set position and dimensions using scales
        bars.selectAll('.bar')
            .data(data)
            .enter().append("rect")
            .attr('class', "bar")
            .attr('x', function(d) {
                return xScale(d.name);
            })
            .attr('y', function(d) {
                return yScale(d.value);
            })
            .attr('width', xScale.bandwidth())
            .attr('height', function(d) {
                return barsHeight - yScale(d.value);
            });

        // Move the bars so that there is space on the left for the y-axis
        bars.attr('transform', 'translate(' + axisMargin + ',0)');

        // Create a new SVG group for the y-axis elements
        // Generate the y-axis with 10 ticks and move into position
        yAxis = chart.append('g')
            .attr('id', 'y-axis')
            .call(d3.axisLeft(yScale).ticks(10))
            .attr('transform', 'translate(' + axisMargin + ',0)');

        // Create another group for the x-axis elements
        // Generate the x-axis using the our x scale and move into positon
        // Select the text elements and rotate by 45 degrees
        xAxis = chart.append('g')
            .attr('id', 'x-axis')
            .call(d3.axisBottom(xScale))
            .attr('transform', 'translate(' + axisMargin + ',' + barsHeight + ')')
            .selectAll("text")
            .style("text-anchor", 'start')
            .attr('transform', 'rotate(45)');

        //		END BAR CHART
        
        
        
        
        
        
        //START AREA CHART
        
        var chart = c3.generate({
            bindto: '#areachart',
    data: {
        columns: [
            ['data1', 300, 350, 300, 250, 170, 0],
            ['data2', 130, 120, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        }
    }
});
        
        
//  END AREA CHART      
        
        
        //START STACKED BAR CHART
        var chart1 = c3.generate({
            bindto: '#stackedbar',
    data: {
        columns: [
            ['Growth in 2019', 30, 200, 200, 400, 150, 250],
            ['Growth in 2018', 130, 100, 100, 200, 150, 50]
            
        ],
        type: 'bar',
        groups: [
            ['Growth in 2019', 'Growth in 2018']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});
        
        //END STACKED BAR CHART
        
        //START PIE CHART
        
        var chart2 = c3.generate({
            bindto: '#piechart',
    data: {
        // iris data from R
        columns: [
            ['No of women working in globallogic', 60],
            ['No of men working in globallogic', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});


        
        //END PIE CHART
        
        
        //START GAUGE CHART
        
        var chart3 = c3.generate({
            bindto: '#gaugechart',
    data: {
        columns: [
            ['Todays Employee Strength in globallogic', 91.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
//        label: {
//            format: function(value, ratio) {
//                return value;
//            },
//            show: false // to turn off the min/max labels.
//        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

setTimeout(function () {
    chart.load({
        columns: [['data', 10]]
    });
}, 1000);
        
setTimeout(function () {
    chart.load({
        columns: [['data', 50]]
    });
}, 2000);

setTimeout(function () {
    chart.load({
        columns: [['data', 70]]
    });
}, 3000);

setTimeout(function () {
    chart.load({
        columns: [['data', 0]]
    });
}, 4000);

setTimeout(function () {
    chart.load({
        columns: [['data', 100]]
    });
}, 5000);
        
      
        //END GAUGE CHART
        
        
        
        //START BAR CHART
        
        
        var chart1 = c3.generate({
            bindto: '#bar',
    data: {
        columns: [
            ['Globallogic profit this week', 30, 200, 200, 400, 150, 250],
            ['Globallogic profit previous week', 130, 100, 100, 200, 150, 50]
            
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});
        
        
        
        
        
        //END BAR CHART

