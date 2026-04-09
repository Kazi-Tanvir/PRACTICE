import path, { join } from 'path';

let myPath = 'D:/02_CODE/01_PRACTICE/03_SIGMA_WEB_DEV/VIDEO 87/promises.js';

console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.basename(myPath));
let joinedPath = path.join(myPath, 'promises.js');
console.log(joinedPath);