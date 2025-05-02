const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

// Copy node.js to dist
fs.copyFileSync(
  path.join(__dirname, 'src', 'node.js'),
  path.join(__dirname, 'dist', 'node.js')
);

console.log('Successfully copied node.js to dist directory'); 