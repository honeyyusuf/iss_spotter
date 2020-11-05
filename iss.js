const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json',(error,response, body)=>{
    if (error) {
      return callback(error,null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
    }


    const data = JSON.parse(body);
    callback(error,data.ip);
    
    
   
    
  });
};
module.exports = {fetchMyIP};
