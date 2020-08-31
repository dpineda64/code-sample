const path = require('path');
const fs = require('fs');

const svgs = process.argv.find((arg) => arg.includes('--svgs'));

try {
  const svgPath = svgs.split('=')[1];
  const fullPath = path.join(__dirname, '../', svgPath);

  const icons = fs
    .readdirSync(fullPath)
    .filter((icon) => !icon.includes('index'))
    .map((icon) => `${icon.split('.')[0]}`);

  console.log(generateIndex(icons));
  fs.writeFileSync(`${fullPath}/index.ts`, generateIndex(icons));
} catch (e) {
  console.error(e);
}

function generateIndex(icons) {
  return `
    import { tuple } from '@vg-kit/utils'

    const icons = tuple(${icons.map((i) => `'${i}'`)});
    export { icons };
  `;
}
