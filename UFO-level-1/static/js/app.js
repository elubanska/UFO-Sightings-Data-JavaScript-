// Read data from data.js
var tableData = data;
console.log(tableData);
var tbody = d3.select("ufo-table");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");



data.forEach((UFO_event) => {
    var row = tbody.append("tr");
    Object.entries(UFO_event).forEach(([value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
  };

  // Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);