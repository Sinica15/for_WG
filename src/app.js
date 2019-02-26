const $ = require("jquery");

var orders = require('../data/orders.json');
var users = require('../data/users.json');
var companies = require('../data/companies.json');

import './styles.css';

import tableBodyRender from "./tableBodyRender.js";
import tableSort from "./tableSort.js";
import tableHeaderRender from "./tableHeaderRender.js";
import eventSetSort from "./eventsSort.js";
import * as search from "./search";
import stats from "./stats.js";


export default (function () {
    
    tableHeaderRender();
    
    var tableBody = document.getElementById('table-body');
    var sortTempFlag = true;
    tableBodyRender(tableBody, orders, users, companies, sortTempFlag);
    
    eventSetSort(tableBody, orders, users, companies);
    
    search.searchWithEvent(orders, users);
    
    stats();
    
//    tableSort(orders, 'User Info', true);
//    tableRender(app, orders, users, companies);
    
   
    
}());
