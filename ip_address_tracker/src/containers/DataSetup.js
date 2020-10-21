
const ip = '8.8.8.8';
const api_key = 'process.env.REACT_APP_DATA';
const api_url = 'process.env.REACT_APP_APT';

const url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

http.get(url, function(response) {
    var str = '';
    response.on('data', function(chunk) { str += chunk; });
    response.on('end', function() { console.log(str); });
}).end();

server.listen(8080);