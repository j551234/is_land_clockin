import fetch from 'node-fetch';
import {getCookies } from './GetCookies.js'
globalThis.fetch = fetch;

var cookies = await getCookies;
const uri = 'https://pt-backend.mayohr.com/api/reCheckInApproval';
var clockForm ={
    "AttendanceOn": "2021-09-16T00:30:00+00:00",
    "AttendanceType": 1,
    "PunchesLocationId": "238d95ba-b5ba-44b4-adff-8fc39492680c",
    "IsBehalf": false

} ;
const clockIn = new Promise((resolve,reject)=> { 

    fetch(uri ,
        {
        method:'POST',
        body:clockForm
        ,
        headers: {
          cookie : cookies
        
        }
      })
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      }).then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        resolve( data) ; 
      });
    
}
)

clockIn.then(data => console.log(data));