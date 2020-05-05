/* helpful examples
  refactor-sync-to-async.js
  sync-vs-async.js
  append-text.js
  copy.js
*/

// require dependencies
const assert = require('assert');
const fs = require('fs');

// declare constants
const START = Date.now();
const SOURCE_PATH = __dirname + '/file.txt';
const ORIGINAL_TEXT = fs.readFileSync(SOURCE_PATH, 'utf-8');

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value
);

// log initial values
log(0.1, SOURCE_PATH);
log(0.2, ORIGINAL_TEXT);

// --- main script ---

// there are two steps to this exercise
// 1. fill in the blanks (and pass!)
// 2. refactor to asynchronous

log(1, 'appending to file ...');
fs.appendFileSync(SOURCE_PATH, ORIGINAL_TEXT);

const callBackAppend = (err) => {
  if (err) {
    log(5, err);
    return;
  }

  log(2, 'appending to file ...');
}

log(2, '...');
fs.appendFile(SOURCE_PATH, ORIGINAL_TEXT, callBackAppend);

const callbackReadFile = (err, data) => {
  if (err) {
    log(5, err);
    return;
  }

  log(4, data);

  assert.strictEqual(data, ORIGINAL_TEXT + ORIGINAL_TEXT + ORIGINAL_TEXT);
  log(5, 'pass!');
}

log(1, 'reading file ...');
fs.readFile(SOURCE_PATH, 'utf-8', callbackReadFile);
log(4, '...');


