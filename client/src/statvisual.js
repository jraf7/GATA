var Chart = require('chart.js');
var myChart = new Chart(ctx, { ...});


// Initialize a Line chart in the container with the ID chart1
new Chartist.Line('#chart1', {
    labels: [1, 2, 3, 4],
    series: [[100, 120, 180, 200]]
});

// Initialize a Line chart in the container with the ID chart2
new Chartist.Bar('#chart2', {
    labels: [1, 2, 3, 4],
    series: [[5, 2, 8, 3]]
});
