import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import https from 'node:https';
import pc from 'picocolors';

function downloadFile(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Serveur injoignable (Code: ${res.statusCode})`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => reject(err));
  });
}

export async function installModule(moduleName: string) {
  const root = process.cwd();
  
  const GITHUB_BASE_URL = `https://raw.githubusercontent.com/fomadev/kitokocss/main/packages/kitoko-core/src/components`;
  const fileUrl = `${GITHUB_BASE_URL}/_${moduleName}.scss`;

  console.log(pc.gray(`Connexion au registre Kitoko Cloud...`));

  try {
    // 1. Télécharger le contenu
    const scssContent = await downloadFile(fileUrl);
    
    // 2. Déterminer où enregistrer le fichier
    // On s'adapte : si on est dans un projet PHP/Django, on crée un dossier "kitoko_modules"
    const targetDir = fs.existsSync(path.join(root, 'packages')) 
                      ? path.join(root, 'packages', `kitoko-${moduleName}`, 'src')
                      : path.join(root, 'kitoko_modules');

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetPath = path.join(targetDir, `_${moduleName}.scss`);
    fs.writeFileSync(targetPath, scssContent);
    console.log(pc.green(`Fichier _${moduleName}.scss téléchargé avec succès.`));

    // 3. Liaison au fichier principal
    const mainScssPath = path.resolve(root, 'scss/kitoko.scss');
    if (fs.existsSync(mainScssPath)) {
      const importStatement = `@use "../packages/kitoko-${moduleName}/src/${moduleName}";`;
      const content = fs.readFileSync(mainScssPath, 'utf8');
      
      if (!content.includes(importStatement)) {
        fs.appendFileSync(mainScssPath, `\n${importStatement}`);
        console.log(pc.blue(`Importation ajoutée dans kitoko.scss`));
      }
    }

  } catch (error: any) {
    throw new Error(`Le module "${moduleName}" n'existe pas sur le cloud Kitoko. (${error.message})`);
  }
}