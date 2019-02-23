

export default function tableRender(nodeTo, orders, users, companies) {
    
    var outPutTable;
    
    outPutTable = "<table id='mainTable'><thead><tr><th>Transaction ID</th><th>User Info</th><th>Order Date</th><th>Order Amount</th><th>Card Number</th><th>Card Type</th><th>Location</th></tr></thead><tbody>";
    
        
    for(let i = 0; i <orders.length; i++){
        outPutTable+="<tr>";
        for (let cell in orders[i]){
            outPutTable+="<td>" + orders[i][cell] + "<td>";
        }
//        outPutTable+= "" +orders[i];
        
        outPutTable+="</tr>";
    }
    
    outPutTable +="</tbody></table>";
    nodeTo.innerHTML = outPutTable;
    
};