# PANodeEndpoint

This is a simple endpoint for testing [PreEmptive Analytics][] message transmission from an instrumented application. The messages received can be either displayed in the console or written to disk.

[Node.js][] is required for this application.

## Usage

 `node endpoint.js [port [filename]]`
 
 - `port` - Port number to listen on (default: `8080`)
 - `filename` - File to write the requests (default: writes to the console)

## License   
PANodeEndpoint is licensed under MS-PL; see `License.txt` for details.

Copyright 2016 PreEmptive Solutions, LLC.

[PreEmptive Analytics]: http://www.preemptive.com/pa
[Node.js]: http://nodejs.org

