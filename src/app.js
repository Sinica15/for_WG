import $ from "jquery";

import orders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';

import './styles.css';

import tableBodyRender from "./tableBodyRender.js";
import tableSort from "./tableSort.js";
import tableHeaderRender from "./tableHeaderRender.js";
import eventSetSort from "./eventsSort.js";
import * as search from "./search";
import stats from "./stats.js";
import currencyСonverter from "./currencyСonverter.js";


export default (function () {
    
    tableHeaderRender();
    
    const tableBody = document.getElementById('table-body');
    let sortTempFlag = true;
    tableBodyRender(tableBody, orders, users, companies, sortTempFlag);
    
    eventSetSort(tableBody, orders, users, companies);
    
    search.searchWithEvent(orders, users);
    
    stats();
    
    currencyСonverter();
    
}());
