import fetch from 'node-fetch';
globalThis.fetch = fetch;

const uri = 'https://auth.mayohr.com/Token';

// should change to be promise function 
// for pipeline usagee
// use set parameter to another env files
// 

const  getCode =  new Promise(
  (resolve, reject) => {
    fetch(uri, {
        method:'POST',
        body:'__RequestVerificationToken=TwwPB00lACAsIyez8Ek7SE2vK08IDoSw6z66kdpKVWsBfMhuLrEyZ_j9KHALdmsqeKdIkv9EJLgBjXL_NgVQiq8hvAM1&grant_type=password&locale=zh-tw&password=Home5904059&red=https%3A%2F%2Fapolloxe.mayohr.com%2Fta&userName=james%40is-land.com.tw'
        ,
        headers: {
          cookie :'PreferenceLanguage=zh-tw; ai_user=9Ethl|2020-10-13T01:32:42.489Z; __RequestVerificationToken=rONZetdVoCARzAtk9xNKjrcpiyoOld7_QCiguygDyJ7pB8tU6FEj5A-w3HypqUlT3F5V2NM1Z2cFPyaNK-ct_DsT3zk1; _sd=nJSeT5MLkcRv8EnsxLLzP1twM+hmTP9zHEQdEqq8mhbeguLi0LmR4FmUlqFS1kzXCD8CWrYBnlRXD3m04eJiObqtC+/Vlanw/n6mWFEfv8HZ9I76HBw3j9sT0bct4z+Pk5/JwEx6yWX5epVIMZuYWf2IZNQo3CjzmRkgnHme7ck=',
          orign : 'https://auth.mayohr.com'
        }
      })
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      }).then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        resolve( data.code) ; 
      });

}

)
export {getCode}