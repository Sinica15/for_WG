import moment from 'moment';

import eventsSetter from "./eventsTableBody.js";
import stats from "./stats.js"

function getNecessaryDateFormat (date, format){
    return moment(date*1000).format(format);
}

function getNecessaryCurrency(value ,course){
    let currencySymbol = "$";
    return value*course + " " + currencySymbol;
}

function hideCardNumber(number){
    let outPutCardNumber = "";
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
    let sex = 'Ms.';
    if(userObject['gender'] == 'Male'){
        sex = 'Mr.';
    }
    let userName = sex + " " + userObject['first_name'] + " " + userObject['last_name'];
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
    let userDetails = "";
    if(userObject['birthday'] != null){
        userDetails+= '<p>Birthday: ' + getNecessaryDateFormat(userObject['birthday'], 'MM/DD/YYYY') + '</p>';
    }
    if(userObject['avatar'] != null){
        userDetails+= '<p><img src="' + userObject['avatar'] + '" width="100px"></p>'
    }
    if (userObject['company_id'] != null){
        let companieObject = getCompanieInfo(userObject['company_id'], companies);
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

function getUserData(order, users, companies, sortTempFlag){
    let id = order['user_id'];
    let userObject;
    for (let i = 0; i < users.length; i++){
        if (id == users[i]['id']){
            userObject = users[i];
            if (sortTempFlag){
                order['name_for_sort'] = userObject['first_name'] + userObject['last_name']; 
                order['location_for_sort'] = order['order_country'] + order['order_ip'];
                sortTempFlag = false;
            }
//            console.log(order['name_for_sort']);
        }
    }
    return getUserName(userObject) + getUserDetails(userObject, companies);
}

function addStatsCells(){
    let out = "";
    out += "<tr class='statistics'>";
    out += "<td>Orders Count</td>";
    out += "<td colspan='2'>Average Check</td>";
    out += "<td>Orders Total</td>";
    out += "<td>Median Value</td>";
    out += "<td>Average Check (Female)</td>";
    out += "<td>Average Check (Male)</td></tr>";
    out += "<tr class='statistics'>";
    out += "<td id='orders-count'></td>";
    out += "<td id='average-check' colspan='2'></td>";
    out += "<td id='orders-total'></td>";
    out += "<td id='median-value'></td>";
    out += "<td id='average-check-female'></td>";
    out += "<td id='average-check-male'></td>";
    out += "</tr>";
    return out; 
}

export default function tableRender(nodeTo, orders, users, companies, sortTempFlag) {
    
    let outPutTable="";
    
    const testFlag = false;
        
    for(let i = 0; i <orders.length; i++){
        if (testFlag && i == 6){
            break;
        }
        
        outPutTable+="<tr id='" + orders[i]['id'] + "'>";
        outPutTable+="<td>" + orders[i]['transaction_id'] + "</td>";
        outPutTable+="<td class='user_data'>" + getUserData(orders[i], users, companies, sortTempFlag) + "</td>";
        outPutTable+="<td>" + getNecessaryDateFormat(orders[i]['created_at'], 'MM/DD/YYYY, HH:MM:SS LT') + "</td>";
        outPutTable+="<td class = 'total'>" + getNecessaryCurrency(orders[i]['total'], 1) + "</td>";
        outPutTable+="<td>" + hideCardNumber(orders[i]['card_number']) + "</td>";
        outPutTable+="<td>" + orders[i]['card_type'] + "</td>";
        outPutTable+="<td>" + orders[i]['order_country'] + " " + "(" + orders[i]['order_ip'] + ")" + "</td>";
        outPutTable+="</tr>";
    }
    
    
//    outPutTable += addStatsCells();
    
    nodeTo.innerHTML = outPutTable;
    
    
    eventsSetter(orders, users, companies);
    
}