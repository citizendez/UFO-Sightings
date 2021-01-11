//Attaching a click event to button
d3.select('#filter-btn').on('click', populateTable);
d3.select('#datetime').on('keyup', populateTable);
d3.select('#city').on('keyup', populateTable);

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

//Function to populate date search
function populateTable(){
    //Filters
    var tableData = data.filter(dateFilter);
    tableData = tableData.filter(cityFilter);
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
        
        
        
        
        //console.log(item)
    })
    
};

populateTable();

/*/Input data into table
tableData.forEach(element => {
    //create column for DATE, isolate date data
    var tdDate = document.createElement("td");
    tdDate.innerText = element.datetime;
    //create column for CITY, isolate city data
    var tdCity = document.createElement("td");
    tdCity.innerText = element.city;
    //create column for STATE, isolate state data
    var tdState = document.createElement("td");
    tdState.innerText = element.state;
    //create column for COUNTRY, isolate country data
    var tdCountry = document.createElement("td");
    tdCountry.innerText = element.country;
    //create column for SHAPE, isolate shape data
    var tdShape = document.createElement("td");
    tdShape.innerText = element.shape;
    //create column for DURATION, isolate duration data
    var tdDuration = document.createElement("td");
    tdDuration.innerText = element.durationMinutes;
    //create column for COMMENTS, isolate comments data
    var tdComments = document.createElement("td");
    tdComments.innerText = element.comments;

    //Create Row
    var tRow = document.createElement("tr");
    //Add columns to rows
    //Date
    tRow.appendChild(tdDate);
    //City
    tRow.appendChild(tdCity);
    //State
    tRow.appendChild(tdState);
    //Country
    tRow.appendChild(tdCountry);
    //Shape
    tRow.appendChild(tdShape);
    //Duration
    tRow.appendChild(tdDuration);
    //Comments
    tRow.appendChild(tdComments);
    //Add rows to table body
    tableBody.appendChild(tRow);
    console.log(element);
});*/
