function addStatsCells(){
    let out = "";
    out += "<tr class='statistics'>";
    out += "<td>Orders Count</td>";
    out += "<td colspan='2'>Average Check</td>";
    out += "<td>Orders Total</td>";
    out += "<td>Median Value</td>";
    out += "<td>Average Check (Female)</td>";
    out += "<td>Average Check (Male)</td></tr>";
    out += "<tr class='statistics'>";
    out += "<td id='orders-count'></td>";
    out += "<td id='average-check' colspan='2'></td>";
    out += "<td id='orders-total'></td>";
    out += "<td id='median-value'></td>";
    out += "<td id='average-check-female'></td>";
    out += "<td id='average-check-male'></td>";
    out += "</tr>";
    return out;
}

export default function tableHeaderRender() {
    let app = document.getElementById("app");    
    let headerTable = "";
    headerTable += "<table id='mainTable'><thead><tr>";
    headerTable += "<th colspan='2'>Search:</th>";
    headerTable += "<th colspan='6'><input type='text' id='search'></th>";
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
    headerTable +="</tbody>";
    
    
    headerTable += "<tbody id='stat'>";
    headerTable += addStatsCells();
    headerTable += "</tbody>";
    
    headerTable += "</table>";
    
    app.innerHTML = headerTable;
}