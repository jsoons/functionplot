var parameters = {
  target: '#myFunction',
  data: [{
    fn: 'sin(x)', 
    color: 'red'
 }       
        ],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

function plot () {
  var xMin = document.querySelector("#xMin").value;
  var xMax = document.querySelector("#xMax").value;
  parameters.xAxis.domain = [xMin, xMax ];
  var yMin = document.querySelector("#yMin").value;
  var yMax = document.querySelector("#yMax").value;
  parameters.yAxis.domain = [yMin, yMax ];

  parameters.data[0].color = document.querySelector("#color").value;
  parameters.data[0].fn =  document.querySelector("#function").value;

  functionPlot(parameters);
}

