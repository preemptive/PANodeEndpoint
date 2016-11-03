#!/usr/bin/env node
/*
 * This creates a simple endpoint that outputs all requests to the screen or a file.
 * Usage: node endpoint.js [port [filename]]
 * The default port is 8080
 * The default output is stdout
 *
 * Licensed under MS-PL; see License.txt for details.
 * Copyright 2016 PreEmptive Solutions, LLC
 */
var http = require("http");
var fs = require('fs');

var port = 8080
if (process.argv.length > 2) {
    port = process.argv[2]
}
var file = null;
if (process.argv.length > 3) {
    file = process.argv[3]
}

http.createServer(function(request,response){
    if (file != null) {
        var stream = fs.createWriteStream(file, {'flags': 'a'});
        stream.write(JSON.stringify(request.headers, null, 4)+'\n');
        request.pipe(stream);
    } else {
        console.log(request.headers);
        request.pipe(process.stdout);
    }
    response.writeHead(200, {
        'Content-Length': 16,
        'Content-Type': 'text/plain' });
    response.write('Endpoint Running');
    response.end();
}).listen(port);

console.log("PANodeEndpoint(v1.0) running on "+port);
