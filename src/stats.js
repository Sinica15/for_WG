import $ from "jquery";

import {converter} from "./currency.js";

function getUserSex(userName){
    let sex = "";
    sex += userName[0];
    sex += userName[1];
    if (sex == 'Mr'){
        return 'male';
    }else{
        return 'female';
    } 
    
}

function sumOnKey(obj, key){
    let sum = 0;
    if (key == undefined){
        for(let i = 0; i < obj.length; i++){
            sum += obj[i];
        }
        return sum;
    }
    for (let i = 0; i < obj.length; i++){
//        console.log('some: ' + obj[key]);
        sum +=obj[i][key];
    }
    return sum.toFixed(2);
}

function averageMalFem(obj, sexKey){
    if (obj.length == 0) return 'n/a';
    if (sexKey == undefined){
        return (sumOnKey(obj, 'total')/parseFloat(obj.length)).toFixed(2);
    }
    let sumArr = [];
    for (let i = 0; i < obj.length; i++){
        if(obj[i]['sex'] == sexKey) sumArr.push(obj[i]['total']);
    } 
    if (sumArr.length == 0) return 'n/a';
    return (sumOnKey(sumArr)/parseFloat(sumArr.length)).toFixed(2);
}

function mediumValue(obj, key){
    if (obj.length == 1 ) return obj[0][key];
    if ((obj.length % 2) == 1 ){
        return obj[(parseInt((obj.length / 2.0 ) + 0.5, 10) - 1)][key];
    }
//    console.log((obj.length % 2) == 0 );
    if ((obj.length % 2) == 0 ){
        return ((obj[obj.length / 2 - 1][key] + obj[obj.length / 2][key]) / 2.0).toFixed(2);
    }
}

function outPutStat(dataObj){
    if (dataObj.length == 0){
        $('#orders-count').text('n/a');
        $('#orders-total').text('n/a');
        $('#median-value').text('n/a');
        $('#average-check').text('n/a');
        $('#average-check-female').text('n/a');
        $('#average-check-male').text('n/a');
        return 0;
    }
//    console.log(dataObj);
    
    $('#orders-count').text(dataObj.length);
    $('#orders-total').text(converter(sumOnKey(dataObj, 'total'), true));
    $('#median-value').text(converter(mediumValue(dataObj, 'total'), true));
    $('#average-check').text(converter(averageMalFem(dataObj), true));
    $('#average-check-female').text(converter(averageMalFem(dataObj, 'female'), true));
    $('#average-check-male').text(converter(averageMalFem(dataObj, 'male'), true));
    
}

function statsOutput(){
    let usersDataForStat = [];
    $("#table-body tr:not(.statistics, #nothing-found)").each(function(i, tr){
        if ($(tr).css('display') == 'none') return;
        usersDataForStat.push({
            sex: getUserSex($(tr).children("td").children("a").text()),
            total : parseFloat($(tr).children(".total").text())   
        }); 
    });
    usersDataForStat.sort(function (a, b) {
        return a.total - b.total;
    });
//    console.log("call stats");
//    console.log(usersDataForStat);
    outPutStat(usersDataForStat);   
}

export default function stats() {
//    console.log("stats");
    statsOutput();
    $("#search").on('input', function(){
        statsOutput();
    });
    $('.currency-button').click(function(){
//        console.log(123);
        statsOutput();
    });
}
                    