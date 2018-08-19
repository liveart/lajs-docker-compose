var httpProxy = require('http-proxy');

const optionDefinitions = [
    { name: 'host', alias: 'h', type: String, defaultOption: "192.168.99.100" },
    { name: 'port', alias: 'p', type: Number, defaultOption: 3000 }
]
const commandLineArgs = require('command-line-args')
const options = commandLineArgs(optionDefinitions)
if (!options.host)
    options.host = "192.168.99.100";
if (!options.port)
    options.port = 3000;

const ADMIN_AREA_PORT = 3000;

const PROTOCOL = "http";
const URL = `${PROTOCOL}:\\\\${options.host}:${options.port}`;

console.log(`Mapping localhost:${ADMIN_AREA_PORT} to ${URL}`);

httpProxy.createProxyServer({target:URL}).listen(ADMIN_AREA_PORT);