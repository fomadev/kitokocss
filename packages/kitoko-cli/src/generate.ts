import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import pc from 'picocolors';

export async function generateModule(moduleName: string) {
  const root = process.cwd();
  const modulePath = path.join(root, 'packages', `kitoko-${moduleName}`);
  const srcPath = path.join(modulePath, 'src');
  const filePath = path.join(srcPath, `_${moduleName}.scss`);

  // 1. Création des dossiers
  if (!fs.existsSync(srcPath)) {
    fs.mkdirSync(srcPath, { recursive: true });
    console.log(pc.gray(`Folder created: packages/kitoko-${moduleName}/src`));
  } else {
    throw new Error(`The module ${moduleName} already exists! Use "install" instead.`);
  }

  // 2. Création du fichier SCSS de base
  const starterCode = `@use "../../kitoko-core/src/variables" as *;\n\n/* Module ${moduleName.toUpperCase()} - KitokoCSS */\n\n.${moduleName} {\n  // Votre code ici\n}\n`;
  
  fs.writeFileSync(filePath, starterCode);
  console.log(pc.gray(`File created: _${moduleName}.scss`));
}