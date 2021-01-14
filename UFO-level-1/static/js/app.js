// from data.js
var tableData = data;
// Select the button
var tbody = d3.select("tbody");

var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([value]) => {
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
