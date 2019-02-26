import $ from "jquery";
//import request from 'request';
//import needle from 'needle';

export default function currencyСonverter() {
//    console.log("conv");
    var theUrl = 'https://api.exchangeratesapi.io/latest';
    
    needle.get('http://www.google.com', function(error, response) {
        if (!error && response.statusCode == 200)
        console.log(response.body);
    }); 
    
}