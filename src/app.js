import $ from "jquery";

import orders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';

import './styles.css';

import tableBodyRender from "./tableBodyRender.js";
import tableSort from "./tableSort.js";
import tableHeaderFooterRender from "./tableHeaderFooterRender.js";
import eventSetSort from "./eventsSort.js";
import * as search from "./search";
import stats from "./stats.js";
import {getCurrencyCurses} from "./currency.js";
import {changeCurrencyRender} from "./currency.js";


export default (function () {
    
    tableHeaderFooterRender();
        
    const tableBody = document.getElementById('table-body');
    let sortTempFlag = true;
    tableBodyRender(tableBody, orders, users, companies, sortTempFlag);
    
    eventSetSort(tableBody, orders, users, companies);
    
    changeCurrencyRender(tableBody, orders, users, companies);
    
    search.searchWithEvent(orders, users);
    
    stats();
    
}());
