// this is an example of improting data from JSON
//import 'orders' from '../data/orders.json';
var orders = require('../data/orders.json');
var users = require('../data/users.json');
var companies = require('../data/companies.json');

import './styles.css';
import tableRender from "./tableRender.js";

export default (function () {
    var app = document.getElementById("app");
    console.log("1");
    tableRender(app, orders, users, companies);
}());
