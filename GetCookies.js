import fetch from 'node-fetch';
import {getCode} from './GetToken.js';
globalThis.fetch = fetch;

var code = await getCode;
var uri = 'https://authcommon.mayohr.com/api/auth/checkticket?code=' + code;

const getCookies = new Promise((resolve,reject)=> { 

    fetch(uri)
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.headers.get('set-cookie');
      }).then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        resolve( data) ; 
      });
    
}
)

export { getCookies}