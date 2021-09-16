import fetch from 'node-fetch';
import {getToken} from './GetToken.js';
globalThis.fetch = fetch;


var  token = getToken();
