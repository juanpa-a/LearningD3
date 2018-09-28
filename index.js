//LEARNING D3!

d3.select('h1')
    .style('color', 'green')
    .attr('class', 'prueba')
    .text('wassup world!');
//
// d3.select('body')
//     .append('p')
//     .text('que pedo!');
//
// d3.selectAll('p')
//     .style('color', 'blue');
//
// let dataset = [1,2,3,4,5,6,7,8,9,0];
//
// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p')
//     .text(data => data * 2);

//BAR CHARTS

let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// let svgWidth = 500, svgHeight = 300, svgPadding = 5;
// let barWidth = (svgWidth / dataset.length);
//
// let svg = d3.select('svg')
//     .attr('width', svgWidth)
//     .attr('height', svgHeight);
//
// let barChart = svg.selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('y', data => svgHeight)
//     .attr('x', data => svgHeight)
var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', elem => svgHeight )

    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });


    // .data(dataset)
    // .enter()
    // .append("rect")
    // .attr("y", data => svgHeight - data)
    // .attr("height", data => data)
    // .attr("width", barWidth - barPadding)
    //
