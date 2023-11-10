import clipboard from 'clipboardy';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { exec } = require('child_process');

// Copy to clipboard
// clipboardy.writeSync('Hello, world!');

// Read from clipboard
const text = clipboard.readSync();
console.log(`Clipboard: ${text}`);
console.log(`[${process.argv[2]}] [${process.argv?.[3] || ''}]`)

exec(`${process.argv[2]} ${process.argv?.[3] || ''} ${text}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});