
function sortTransactionID(orders, minus){
//    console.log("transactIn");
//    orders.sort(function (a, b) {
//        return minus * (a.transaction_id - b.transaction_id);
//    });
    orders.sort(function(a, b) {
        var nameA = a.transaction_id.toUpperCase(); // ignore upper and lowercase
        var nameB = b.transaction_id.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1 * minus;
        }
        if (nameA > nameB) {
            return 1 * minus;
        }
        // names must be equal
        return 0;
    });
}

function sortUserInfo(orders, minus){
    orders.sort(function(a, b) {
        var nameA = a.name_for_sort.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name_for_sort.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1 * minus;
        }
        if (nameA > nameB) {
            return 1 * minus;
        }
        // names must be equal
        return 0;
    });
}

function sortOrderDate(orders, minus){
    orders.sort(function (a, b) {
        return minus * (a.created_at - b.created_at);
    });
}

function sortOrderAmount(orders, minus){
    orders.sort(function (a, b) {
        return minus * (a.total - b.total);
    });
}

function sortCardType(orders, minus){
    orders.sort(function(a, b) {
        var nameA = a.card_type.toUpperCase(); // ignore upper and lowercase
        var nameB = b.card_type.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1 * minus;
        }
        if (nameA > nameB) {
            return 1 * minus;
        }
        // names must be equal
        return 0;
    });
}

function sortLocation(orders, minus){
//    orders.sort(function (a, b) {
//        return minus * (a.location_for_sort - b.location_for_sort);
//    });
    orders.sort(function(a, b) {
//        console.log(a.location_for_sort);
        var nameA = a.location_for_sort.toUpperCase(); // ignore upper and lowercase
        var nameB = b.location_for_sort.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1 * minus;
        }
        if (nameA > nameB) {
            return 1 * minus;
        }
        // names must be equal
        return 0;
    });
}

export default function tableSort(orders, key, sortFlag) {
//    console.log("connected");
    
    var reversSort = 1;
    if(sortFlag){
        reversSort = -1;
    }
        
    switch (key) {
        case 'Transaction ID':
            sortTransactionID(orders, reversSort);
            break;
        case 'User Info':
            sortUserInfo(orders, reversSort);
            break;
        case 'Order Date':
            sortOrderDate(orders, reversSort);
            break;
        case 'Order Amount':
            sortOrderAmount(orders, reversSort);
            break;
        case 'Card Type':
            sortCardType(orders, reversSort);
            break;
        case 'Location':
            sortLocation(orders, reversSort);
            break;
        default:
            alert( 'miss' );
    }      

}