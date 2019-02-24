var $ = require("jquery");

var orders = require('../data/orders.json');
var users = require('../data/users.json');
var companies = require('../data/companies.json');

import './styles.css';
import tableBodyRender from "./tableBodyRender.js";
import tableSort from "./tableSort.js";

export default (function () {
    var app = document.getElementById("app");
    
    console.log("1");
    
    var headerTable = "";
    headerTable = "<table id='mainTable'><thead><tr>";
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
    var tableBody = document.getElementById('table-body');
    var sortTempFlag = true;
    tableBodyRender(tableBody, orders, users, companies, sortTempFlag);
    
    $("th.sortable").click(function(event) {
        let column = $(this).text(); 
        let reverse = false;
        if ($(this).hasClass("sorted")){
            reverse = true;
            $(this).removeClass("sorted");
        }else{
            $(this).addClass("sorted");
        }
//        console.log(column);
        
        tableSort(orders, column, reverse);
        tableBodyRender(tableBody, orders, users, companies);
    });
    
    
    
//    tableSort(orders, 'User Info', true);
//    tableRender(app, orders, users, companies);
    
   
    
}());
