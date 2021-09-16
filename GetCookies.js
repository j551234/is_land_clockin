import fetch from 'node-fetch';

globalThis.fetch = fetch;

function  getCookies(code) {
  var uri = 'https://authcommon.mayohr.com/api/auth/checkticket?code=' + code;
  return  new Promise((resolve,reject)=> { 

    fetch(uri)
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.headers.get('set-cookie');
      }).then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        var cutCookies = data.substring(0,data.indexOf(';'));

        resolve( cutCookies) ; 
      });
    
}
)

}

export { getCookies}