# is_land_clockin
use nodejs to call api help clockin daily

## init
npm init

## set your password and account
in gettoken.js,needs to set your account into 
```javascript=
var password= 'YOURPASSWORD';
var userName ='YOURACCOUNT';
```

## usage
* npm start : start api ,for daily call
* node clockin.js : clockIN today 
* node clockout.js : clockOut today



## scenary 
* use heroku for server 
* use appscript to trigger daily 
