const fs = require('fs');
const file = 'dist/index.html';
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  // Match both src="/file.js" and src=/file.js (with or without quotes)
  const fixed = content.replace(/(src|href)=["']?\/([^"'>\s]+)["']?/g, '$1="./$2"');
  fs.writeFileSync(file, fixed);
  console.log('✅ Fixed absolute paths in dist/index.html');
}
