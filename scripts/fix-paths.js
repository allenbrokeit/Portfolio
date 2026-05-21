const fs = require('fs');
const file = 'dist/index.html';
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  const fixed = content.replace(/"\/([^"]+)"/g, '"./$1"');
  fs.writeFileSync(file, fixed);
  console.log('✅ Fixed absolute paths in dist/index.html');
}
