var $ = require("jquery");

var orders = require('../data/orders.json');
var users = require('../data/users.json');
var companies = require('../data/companies.json');

import './styles.css';
import tableRender from "./tableRender.js";

export default (function () {
    var app = document.getElementById("app");
    
    console.log("1");
    
    tableRender(app, orders, users, companies);
    
    $(".user_data > a").click(function(event) {
//        console.log(332);
        event.preventDefault(); 
        
    });
    
//    $('#block').one('click', fn);

    
//    $(".user_data > a").one('click', function(){
//        console.log(228);
//        $(".user-details").siblings().css('display', 'block');
//    });
    
    
    $("td.user_data > a").click(function(){
        if($(this).siblings().css('display') == 'block'){
            $(this).siblings().css('display', 'none');
        }else{
            $(this).siblings().css('display', 'block');
        }
    });
    
    
    
    

    
    




}());
