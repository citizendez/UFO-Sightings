//Events listners
d3.select('#filter-btn').on('click', resetButton);
d3.select('#datetime').on('keyup', populateTable);
d3.select('#city').on('keyup', populateTable);
d3.select('#state').on('change', populateTable);
d3.select('#shape').on('change', populateTable);

//Sort state data 
var states = data.map(function(item) {
    return item.state;
  }).sort();
states = [...new Set(states)];

//Sort shape data 
var shapes = data.map(function(item) {
    return item.shape;
  }).sort();
shapes = [...new Set(shapes)];
console.log(shapes);

//Populate state select
states.forEach(state => {
    d3.select('#state').append('option').attr('value', state).text(state.toUpperCase());
});

//Populate shape select
shapes.forEach(shape => {
    d3.select('#shape').append('option').attr('value', shape).text(shape.toUpperCase());
});

// Create a custom filtering function DATE
function dateFilter(dataRow) {
    //Generate value for date box
    var dateValue = d3.select('#datetime').property('value');
    if (dateValue == '' || dataRow.datetime.includes(dateValue))
    {
        return true;
    }
    else{
        return false;
    }
};

// Create a custom filtering function CITY
function cityFilter(dataRow) {
    //Generate value for date box
    var cityValue = d3.select('#city').property('value');
    if (cityValue == '' || dataRow.city.includes(cityValue))
    {
        return true;
    }
    else{
        return false;
    }
};

// Create a custom filtering function STATE
function stateFilter(dataRow) {
    //Generate value for date box
    var stateValue = d3.select('#state').property('value');
    //console.log(stateValue)
    if (stateValue == '' || dataRow.state.includes(stateValue))
    {
        return true;
    }
    else{
        return false;
    }
};

// Create a custom filtering function SHAPE
function shapeFilter(dataRow) {
    //Generate value for date box
    var shapeValue = d3.select('#shape').property('value');
    //console.log(stateValue)
    if (shapeValue == '' || dataRow.shape.includes(shapeValue))
    {
        return true;
    }
    else{
        return false;
    }
};

// Create a custom filtering function COUNTRY
function countryFilter(dataRow) {
    //Generate value for date box
    var countryValue = d3.select('#country').property('value');
    if (countryValue == '' || dataRow.country.includes(countryValue))
    {
        return true;
    }
    else{
        return false;
    }
};

resetButton()
//Reset function for button
function resetButton(){
    d3.select('#state').property('value', '');
    d3.select('#datetime').property('value', '');
    d3.select('#city').property('value', '');
    d3.select('#shape').property('value', '');
    d3.select('#country').property('value', '');
    populateTable();
};


//Function to populate date search
function populateTable(){
    //Filters
    var tableData = data.filter(dateFilter);
    tableData = tableData.filter(cityFilter);
    tableData = tableData.filter(stateFilter);
    tableData = tableData.filter(countryFilter);
    tableData = tableData.filter(shapeFilter);

    //Create table body 
    var tableBody = d3.select('#ufo-table tbody');
    
    //Reset table
    d3.selectAll('#ufo-table tbody tr').remove();
    //For each Row: for each column create column, inster value into column
    tableData.forEach(item => {
        //create row
        var tRow = tableBody.append("tr");
        // Get the entries for each object in the array
        Object.entries(item).forEach(([key, value]) => {
            //Taking a row and adding a column
            var cell = tRow.append("td");
            //Add values to column
            cell.text(value);
        });
     
    })
    
};

populateTable();