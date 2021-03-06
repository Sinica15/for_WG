import $ from "jquery";

function getJustUserName (id, users){
    for (let i = 0; i < users.length; i++){
//        console.log(users);
//        console.log(users['id']);
        if (id == users[i]['id']) {
            return users[i]['first_name'].toLowerCase() + " " + users[i]['last_name'].toLowerCase();
        }
    }
}

function searchInTable(searchableValue, orders, users){
    
    
    for(let i = 0; i < orders.length; i++){
        let searchFlag = false;
        let lookForThat = searchableValue.toString().toLowerCase();
        
        $("#" + orders[i]["id"]).css('display', 'table-row');
        
        for(let key in orders[i]){
            
//            console.log(orders[i][key].toString());
            
            if (key == "card_number" || 
                key == "created_at" || 
                key == "location_for_sort" ||
                key == "id" || 
                key == "name_for_sort") continue;
            
//            console.log(key.toString());
            
            let lookForWhere = orders[i][key].toString().toLowerCase();
            
//            console.log( "<" + lookForWhere + " " + lookForThat + ">");
            
            if(lookForWhere.indexOf(lookForThat) >= 0 && lookForThat != ""){
                searchFlag = true;
            }
        }
        
        let userName = getJustUserName(orders[i]["user_id"], users);
//        console.log(userName);
        if (userName.indexOf(lookForThat) >= 0 && lookForThat != "") searchFlag = true;
        
        if (!searchFlag){
            $("#" + orders[i]["id"]).css('display', 'none');
        }
    }
    
    if (searchableValue == ""){
        for(let i = 0; i < orders.length; i++){
            $("#" + orders[i]["id"]).css('display', 'table-row');
        }
    }
    
}

function checkForNothingFound(){
    $('#nothing-found').remove();
//    console.log($("#table-body tr"));
    let notFound = true;
    
    $("#table-body tr:not(.statistics)").each(function(i, tr){
        if ($(tr).css('display') == 'table-row'){
            notFound = false;
            return false;
        }
    });
    if (notFound){
        $("#table-body").append("<tr id='nothing-found'><td colspan='7' > Nothing found </td></tr>");
    }
}

export function searchWithoutEvent(orders, users){
//    console.log("call searchWithout");   
    let searchVal = $("#search").val();
//    console.log(searchVal);
    searchInTable(searchVal, orders, users);
    checkForNothingFound();
}
                             
export function searchWithEvent(orders, users) {
    $("#search").on('input', function(){
//        console.log(this.value);   
//        console.log("call searchWith");   
        searchInTable(this.value, orders, users);
        checkForNothingFound();
    });
//    $('.currency-button').click(function(){
//        searchInTable(this.value, orders, users);
//        checkForNothingFound();
//    });
}