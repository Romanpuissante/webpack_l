const width = 500, height = 500, margin = 25;
const axisXWidth = width - 2*margin;
const axisYWidth = height - 2*margin;

const rawData = [{x: 0, y: 55},
    {x: 10, y: 67}, {x: 20, y: 74},{x: 30, y: 63},
    {x: 40, y: 56}, {x: 50, y: 24}, {x: 60, y: 26},
    {x: 70, y: 19}, {x: 80, y: 42}, {x: 90, y: 88},
    {x: 100, y: 80}
];
const data=[];
const dataZero = [];

const svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height);

const scaleX = d3.scaleLinear()
.domain([0, 100])
.range([0, axisXWidth]);

const scaleY = d3.scaleLinear()
.domain([100, 0])
.range([0, axisYWidth]);

const axisX = d3.axisBottom(scaleX);
const axisY = d3.axisLeft(scaleY);

svg.append("g")
.attr("class", "axisX")
.attr("transform", `translate(${margin}, ${height-margin})`)
.call(axisX)

svg.append("g")
.attr("class", "axisY")
.attr("transform", `translate(${margin}, ${margin})`)
.call(axisY)

svg.select(".axisY").selectAll(".tick")
.append("line")
.attr("class", "grid-line")
.attr("x1", 0)
.attr("y1", 0)
.attr("x2", axisXWidth)
.attr("y2", 0)

svg.select(".axisX").selectAll(".tick")
.append("line")
.attr("class", "grid-line")
.attr("x1", 0)
.attr("y1", 0)
.attr("x2", 0)
.attr("y2", -axisYWidth);

for (let {x, y} of rawData) {
    data.push({x: scaleX(x) + margin, y: scaleY(y) + margin});
    dataZero.push({x: scaleX(x) + margin, y: height - margin});
}

const cur = d3.curveCatmullRom;

const line = d3.line()
.curve(cur)
.x((d) => d.x)
.y((d) => d.y);

const area = d3.area()
.curve(cur)
.x((d) => d.x)
.y1((d) => d.y)
.y0((d)=> height-margin);

const g = svg.append("g");

g.append("path")
.attr("d", area(dataZero))
.attr("class", "area");

g.select(".area")
.transition()
.duration(1000)
.attr("d", area(data));

g.append("path")
.attr("d", line(dataZero))
.attr("class", "line-graph");

g.select(".line-graph")
.transition()
.duration(1000)
.attr("d", line(data));

g.append("text")
.attr("x", width/2)
.attr("y", margin-4)
.text("Линейный график")
.attr("class", "title")

svg.selectAll(".dot")
.data(dataZero)
.enter()
.append("circle")
.attr("class", "dot")
.attr("r", 5)
.attr("cx", (d) => d.x)
.attr("cy", (d) => d.y)

svg.selectAll(".dot")
.data(data)
.transition()
.duration(1000)
.attr("r", 5)
.attr("cx", (d) => d.x)
.attr("cy", (d) => d.y)