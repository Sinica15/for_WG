
function sortTransactionID(orders, minus){
    orders.sort(function(a, b) {
        let nameA = a.transaction_id.toUpperCase();
        let nameB = b.transaction_id.toUpperCase();
        if (nameA < nameB) {
            return -1 * minus;
        }
        if (nameA > nameB) {
            return 1 * minus;
        }
        return 0;
    });
}

function sortUserInfo(orders, minus){
    orders.sort(function(a, b) {
        let nameA = a.name_for_sort.toUpperCase();
        let nameB = b.name_for_sort.toUpperCase();
        if (nameA < nameB) {
            return -1 * minus;
        }
        if (nameA > nameB) {
            return 1 * minus;
        }
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
        let nameA = a.card_type.toUpperCase();
        let nameB = b.card_type.toUpperCase();
        if (nameA < nameB) {
            return -1 * minus;
        }
        if (nameA > nameB) {
            return 1 * minus;
        }
        return 0;
    });
}

function sortLocation(orders, minus){
    orders.sort(function(a, b) {
        let nameA = a.location_for_sort.toUpperCase();
        let nameB = b.location_for_sort.toUpperCase();
        if (nameA < nameB) {
            return -1 * minus;
        }
        if (nameA > nameB) {
            return 1 * minus;
        }
        return 0;
    });
}

export default function tableSort(orders, key, sortFlag) {
    let reversSort = 1;
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