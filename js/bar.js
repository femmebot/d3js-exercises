var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear() // calculates and adjusts for max width
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div") // data join
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
