import $ from "jquery";

export default function eventsSetter(orders, users, companies) {
    $(".user_data > a").click(function(event) {
        event.preventDefault(); 
    });    
    $("td.user_data > a").click(function(){
        if($(this).siblings().css('display') == 'block'){
            $(this).siblings().css('display', 'none');
        }else{
            $(this).siblings().css('display', 'block');
        }
    });
}