
export default function tableHeaderRender() {
    var app = document.getElementById("app");    
    var headerTable = "";
    headerTable += "<table id='mainTable'><thead><tr>";
    headerTable += "<th>Search:</th>";
    headerTable += "<th colspan='7'><input type='text' id='search'></th>";
//    headerTable += "<th>UsId<input type='checkbox' id='us-id'></th>";
    headerTable += "</tr><tr>";
    headerTable += "<th class = 'sortable'>Transaction ID</th>";
    headerTable += "<th class = 'sortable'>User Info</th>";
    headerTable += "<th class = 'sortable'>Order Date</th>";
    headerTable += "<th class = 'sortable'>Order Amount</th>";
    headerTable += "<th>Card Number</th>";
    headerTable += "<th class = 'sortable'>Card Type</th>";
    headerTable += "<th class = 'sortable'>Location</th>";
    headerTable += "</tr></thead><tbody id='table-body'>";
    headerTable +="</tbody></table>";
    app.innerHTML = headerTable;
}