# is_land_clockin
use nodejs to call api help clockin daily

## init
npm install

## set your password and account
in gettoken.js,needs to set your account into 
```javascript=
var password= 'YOURPASSWORD';
var userName ='YOURACCOUNT';
```

## usage in local
* npm start : start api ,for daily call
* node clockin.js : clockIN today 
* node clockout.js : clockOut today



## daily call scenario 
* use heroku for server 
* use google app script to trigger daily 
