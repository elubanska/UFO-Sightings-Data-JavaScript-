// Read data from data.js
var tableData = data;
console.log(tableData);

var table = d3.select("#ufo-table");
var tbody = table.select("tbody")
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


data.forEach((UFO_event) => {
    var row = tbody.append("tr");
    Object.entries(UFO_event).forEach(([key,value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  function clear_data() {
    var rows = tbody.selectAll("tbody")
    rows.selectAll("tr").remove();
  }

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    clear_data();
    console.log("Input Element:", inputElement);
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log("Input Value: ", inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
    
    filteredData.forEach((UFO_event) => {
        var row = tbody.append("tr");
        Object.entries(UFO_event).forEach(([key,value]) => {
          var cell = row.append("td");
          cell.text(value);
          //console.log("Cell value:", cell.text(value));
        });
    }
    )};