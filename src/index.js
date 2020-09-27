import './styles/main';
import {doughnut} from './DforY/doughnut'


const data=[
    {browser: "Google Chrome", rate: 42.52},
    {browser: "Firefox", rate: 16.23},
    {browser: "Opera", rate: 12.6},
    {browser: "Yandex Browser", rate: 9.12},
    {browser: "Internet Explorer", rate: 10.56},
    {browser: "Другие", rate: 8.97}
];

doughnut('.pie');
// const chart = new ChartForY('.pie', {
//     type: 'doughnut',
// });


// function dounatPie(data, el) {
//     const containerWidth = d3.select(".pie").style("width")
//     const width = 500, height = 500, margin = 25;
//     const radius = d3.min([width, height])/2 - margin;
//     const colors = d3.schemeDark2;
// }



// console.info(containerWidth);


// const arc = d3.arc()
// .outerRadius(radius)
// .innerRadius(radius - 50)

// const pie = d3.pie()
// .sort(null)
// .value((d) => d.rate)

// const svg = d3.select(".pie").append("svg")
// .attr("width", width)
// .attr("height", height)
// .append("g")
// .attr("transform", `translate(${width/2}, ${height/2})`);


// const g = svg.selectAll("arc")
// .data(pie(data))
// .enter()
// .append("g")
// .attr("class", "arc");

// g.append("path")
// .attr("d", arc)
// .style("fill", (d, i)=> colors[i])