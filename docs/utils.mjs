import fs from 'fs'
import path from 'path';

export function copyNotesAssetsInPublicFolder() {
  const sourceAssetFolder = path.join('notes', 'assets');
  const destAssetsFolder = path.join('docs', 'public', 'assets');
  if (fs.existsSync(destAssetsFolder)) {
    fs.rmSync(destAssetsFolder, { recursive: true, force: true });
  }
  fs.cpSync(sourceAssetFolder, destAssetsFolder, { recursive: true });
}

export function generatePaths(lang) {
  // console.log('2', fs.readdirSync('notes'));
  const result = fs
    .readdirSync('notes')
    .map(fileName => {
      const extName = path.extname(fileName);
      return { fileName, extName, baseName: path.basename(fileName, extName) };
    })
    .filter(fileNameObj => fileNameObj.extName === '.md'
      && fileNameObj.baseName.startsWith(`${lang}.`)) //vanno anche filtrate le foglie...
    .map(fileNameObj => {
      return {
        params: {
          note: fileNameObj.baseName
            .slice(fileNameObj.baseName.indexOf('.') + 1) //remove lang prefix
            .replaceAll('.', '/') //from dendron format to directory format
        },
        content: fs.readFileSync(path.join('notes', fileNameObj.fileName))
      }
    });

  console.log(lang);
  console.log(result);

  return result;
}