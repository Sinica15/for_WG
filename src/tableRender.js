const moment = require('moment');

function getNecessaryDateFormat (date, format){
    return moment(date*1000).format(format);
}

function getNecessaryCurrency(value ,course){
    var currencySymbol = "$";
    return currencySymbol + " " + value*course;
}

function hideCardNumber(number){
    var outPutCardNumber = "";
    for (let i = 0; i < number.length - 4; i++){
        if (i>1){
            outPutCardNumber+= "*";
        }else{
            outPutCardNumber+= number[i];
        }
    }
    for(let i = 0, j = number.length - 5; i < 4; i++, j++){
        outPutCardNumber+= number[j];
    }
    return outPutCardNumber;
}

function getUserName(userObject){
    var sex = 'Ms.';
    if(userObject['gender'] == 'Male'){
        sex = 'Mr.';
    }
    var userName = sex + " " + userObject['first_name'] + " " + userObject['last_name'];
    return '<a href="#">' + userName + '</a>';
}

function getCompanieInfo(id, companies){
    for (let i = 0; i < companies.length; i++){
        if(id == companies[i]['id']){
            return companies[i];
        }
    }
}

function getUserDetails(userObject, companies){
    var userDetails = "";
    if(userObject['birthday'] != null){
        userDetails+= '<p>Birthday: ' + getNecessaryDateFormat(userObject['birthday'], 'MM/DD/YYYY') + '</p>';
    }
    if(userObject['avatar'] != null){
        userDetails+= '<p><img src="' + userObject['avatar'] + '" width="100px"></p>'
    }
    if (userObject['company_id'] != null){
        var companieObject = getCompanieInfo(userObject['company_id'], companies);
        if ((companieObject['url'] != null)&&(companieObject['title'] != null)){
            userDetails+='<p>Company: <a href="' + companieObject['url'] + '" target="_blank">' + companieObject['title'] + '</a></p>';
        }else{
            if(companieObject['url'] != null){
                userDetails+='<p>Company: <a href="' + companieObject['url'] + '" target="_blank"> companie site </a></p>';
            }
            if(companieObject['title'] != null){
                userDetails+='<p>Company: ' + companieObject['title'] + '</p>';
            }
        }
        if ((companieObject['industry'] != null)&&(companieObject['sector'] != null)){
            userDetails+='<p>Industry: ' + companieObject['industry'] + ' / ' + companieObject['sector'] + '</p>';
        }else{
            if(companieObject['industry'] != null){
                userDetails+='<p>Industry: ' + companieObject['industry'];
            }
            if(companieObject['sector'] != null){
                userDetails+='<p>Sector: ' + companieObject['sector'] + '</p>';
            }
        }
        
    }
    return '<div class="user-details">' + userDetails + '</div>';
}

function getUserData(id, users, companies){
    var userObject;
    for (let i = 0; i < users.length; i++){
        if (id == users[i]['id']){
            userObject = users[i];
        }
    }
    return getUserName(userObject) + getUserDetails(userObject, companies);
}

export default function tableRender(nodeTo, orders, users, companies) {
    
    var outPutTable;
    
    outPutTable = "<table id='mainTable'><thead><tr><th>Transaction ID</th><th>User Info</th><th>Order Date</th><th>Order Amount</th><th>Card Number</th><th>Card Type</th><th>Location</th></tr></thead><tbody>";
    
        
    for(let i = 0; i <orders.length; i++){
        outPutTable+="<tr id='" + orders[i]['id'] + "'>";
        outPutTable+="<td>" + orders[i]['transaction_id'] + "</td>";
        outPutTable+="<td class='user_data'>" + getUserData(orders[i]['user_id'], users, companies) + "</td>";
        outPutTable+="<td>" + getNecessaryDateFormat(orders[i]['created_at'], 'MM/DD/YYYY, HH:MM:SS LT') + "</td>";
        outPutTable+="<td>" + getNecessaryCurrency(orders[i]['total'], 1) + "</td>";
        outPutTable+="<td>" + hideCardNumber(orders[i]['card_number']) + "</td>";
        outPutTable+="<td>" + orders[i]['card_type'] + "</td>";
        outPutTable+="<td>" + orders[i]['order_country'] + " " + "(" + orders[i]['order_ip'] + ")" + "</td>";
        
        outPutTable+="</tr>";
    }
    
    outPutTable +="</tbody></table>";
    nodeTo.innerHTML = outPutTable;
    
};