const $ = require("jquery");

import tableBodyRender from "./tableBodyRender.js";
import tableSort from "./tableSort.js";
import * as search from "./search.js";

export default function eventSetSort(tableBody, orders, users, companies) {
   
    $("th.sortable").click(function(event) {
//        $("th.sortable").removeClass("sorted");
        $("#arrow").remove()
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
        search.searchWithoutEvent(orders, users);
        
        
        if (!reverse){
            $('<span id="arrow"> &#8595;</span>').appendTo(this);
        }else{
            $('<span id="arrow"> &#8593;</span>').appendTo(this);
        }
    });
    
}