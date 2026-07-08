const { toLowerCase, toUpperCase } = require('./stringUtils.cjs');
const ltc = require('./logToConsole.cjs');

let someStr = "ThIsIsAFuNKYstriNG";

ltc(`Lower case function: ${toLowerCase(someStr)}`);
ltc(`Lower case function: ${toUpperCase(someStr)}`);