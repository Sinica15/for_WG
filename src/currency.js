import $ from "jquery";

import orders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';

import tableBodyRender from "./tableBodyRender.js";
import {searchWithoutEvent} from "./search.js";

let curses;
export let currentCurrency = 'USD';

export function getCurrencyCurses(){
//    console.log(132);
    let theUrl = 'https://api.exchangeratesapi.io/latest';
    
    let resp;
    
    var x = new XMLHttpRequest();
    x.open("GET", theUrl, false);
    x.onload = function (){
        resp = x.responseText;
    }
    x.send(null);
    
    curses = JSON.parse(resp);
}

export { curses };

function changeCurrencyEventSetter(tableBody, orders, users, companies){
    $('.currency-button').click(function(){
        console.log('call currency');
        $('.pressed').removeClass('pressed');
        $(this).addClass('pressed');
        currentCurrency = $(this).children().text();
        tableBodyRender(tableBody, orders, users, companies);
        searchWithoutEvent(orders, users);
    });
    $('#clouse-open').click(function(){
        if($('#change-currency').css('right') == '0px'){
            $('#change-currency').css('right', '-250px');
            $('#transparent-wind').css('display', 'none');
            $('#currency-bar').css('height', '26px');
            $('#change-currency').css('opacity', '1');
        }else{
            $('#change-currency').css('right', '0px');
            $('#transparent-wind').css('display', 'block');
            $('#currency-bar').css('height', '50px');
        }
    });
    $('#transparent-wind').click(function(){
        if($('#change-currency').css('opacity') == '1'){
            $('#change-currency').css('opacity', '0.2');
        }else{
            $('#change-currency').css('opacity', '1');
        }
    });
}

export function changeCurrencyRender(tableBody, orders, users, companies){
    getCurrencyCurses();
    
    let block = '<div id="change-currency" class="change-currency-open">';
    
    
    block += '<div id="currency-bar">';
    block += '<div id="clouse-open" title="clouse/open"></div>';
    block += '<div id="transparent-wind" title="make transparent"></div>';
    block += '</div>';
        
    block += '<div class="buttons">';
    for (let currency in curses['rates']){
        block += '<div class="currency-button"><div>' + currency + '</div></div>';  
    }
    block += '<div class="currency-button"><div>EUR</div></div>';    
    block += '</div>';
    block += '</div>';
    
    $('#app').append(block);
    
    changeCurrencyEventSetter(tableBody, orders, users, companies);
}

export function converter(value, noConvertFlag) {
    if(noConvertFlag){
        return value + ' ' + currentCurrency;
    }
    if (currentCurrency == 'USD' ||
        curses == undefined ){
        return value + ' ' + 'USD';
    }
    if (currentCurrency == 'EUR') {
        return (value / curses['rates']['USD']).toFixed(2) + ' ' + currentCurrency;
    }
    
    
    return (value / curses['rates']['USD'] * curses['rates'][currentCurrency]).toFixed(2) + ' ' + currentCurrency;
    
    
    
}