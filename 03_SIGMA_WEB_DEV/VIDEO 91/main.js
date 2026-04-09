// CHANGED: Fixed typo in variable name 'express'. OLD LOGIC: const epress = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');

const directoryPath = 'D:\\02_CODE\\01_PRACTICE\\03_SIGMA_WEB_DEV\\VIDEO 91';
const categories = {
    'video': ['.mp4', '.avi', '.mkv'],
    'audio': ['.mp3', '.wav', '.aac'],
    'image': ['.jpg', '.jpeg', '.png', '.gif'],
    'document': ['.pdf', '.docx', '.txt'],
    'zip': ['.zip', '.rar', '.7z', '.torrent'],
    'programs': ['.exe', '.apk', '.msix'],
    'misc': ['.lnk', '.bin', '.crdownload']
};
const folderNames = Object.keys(categories);
const extenstions = Object.values(categories);

folderNames.forEach(async (folder) => {
    fs.mkdir(path.join(directoryPath, folder), { recursive: true }, (err) => {
        if (err) {
            return console.log('Unable to create directory: ' + err);
        }
    });
});

// CHANGED: Added 'index' parameter to easily map to folderNames below. 
// OLD LOGIC: extenstions.forEach((ext) => { 
extenstions.forEach((ext, index) => { 
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach((file) => {
            // CHANGED: Checked 'ext' (the specific category array) instead of 'extenstions' (the array of arrays). 
            // OLD LOGIC: if (extenstions.includes(path.extname(file))) {
            if (ext.includes(path.extname(file))) {
                const oldPath = path.join(directoryPath, file);
                
                // CHANGED: Used 'index' directly to find the folder name. It's cleaner and less prone to errors.
                // OLD LOGIC: const newPath = path.join(directoryPath, folderNames[extenstions.indexOf(ext)], file);
                const newPath = path.join(directoryPath, folderNames[index], file);
                
                fs.rename(oldPath, newPath, (err) => {
                    if (err) {
                        return console.log('Unable to move file: ' + err);
                    }
                }); 
                console.log(`Moved file: ${oldPath} to ${newPath}`);
            }
        });
    });
});


// CHANGED: Using the correctly spelled variable. OLD LOGIC: const app = epress();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});