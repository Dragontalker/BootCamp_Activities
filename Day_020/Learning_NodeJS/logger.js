var url = 'http://mylogger.io/log ';

// Only available to scope logger.js, or in another way, private.
function log(message) {
    //Send an HTTP request
    console.log(message);
}

// Make a module to export
module.exports.log = log;
module.exports.url = url;