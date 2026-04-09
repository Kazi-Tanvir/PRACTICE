import fs from 'fs/promises';

await fs.writeFile('hello.txt', 'Hello not  World!')
console.log('File has been written');
let b = await fs.readFile('hello.txt')
console.log(b.toString());
await fs.appendFile('hello.txt', '\nHello again!')
console.log('File has been appended');
