import fs from 'fs';

// fs.writeFileSync('hello1.txt', 'Hello, World!')

fs.writeFile('hello.txt', 'Hello not  World!', () => {
    console.log('File has been written');
    fs.readFile('hello.txt', (error ,data) => {
        console.log(error, data.toString());
    })
})
fs.appendFile('hello.txt', '\nHello again!', () => {
    console.log('File has been appended');
})
