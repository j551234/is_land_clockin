import fetch from 'node-fetch';
import { getCode } from './GetToken.js';
import {getCookies } from './GetCookies.js'
globalThis.fetch = fetch;

var now = new Date();
var nowDate =now.toISOString().split('T')[0];
var clockTime = (nowDate+"T10:00:00+00:00");


// attendance Type : 1 上班
// attendance Type : 2 下班
const uri = 'https://pt-backend.mayohr.com/api/reCheckInApproval';
var clockForm =JSON.stringify({
    "AttendanceOn":clockTime,
    "AttendanceType": 2,
    "PunchesLocationId": "238d95ba-b5ba-44b4-adff-8fc39492680c",
    "IsBehalf": false

}) ;
console.log(clockForm);

function clockOut(cookies) {
   new Promise((resolve,reject)=> { 
console.log(cookies);
    fetch(uri ,
        {
        method:'POST',
        body:clockForm
        ,
        headers: {
          Cookie : cookies,
         'Content-Type' :'application/json',
         'Connection' : 'keep-alive'

        
        }
      })
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        console.log(response);
        return response.json();
      }).then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        resolve( data) ; 
      });
    
}
)

}

var  result  =  getCode().then(code => getCookies(code)).then(res =>clockOut(res));

