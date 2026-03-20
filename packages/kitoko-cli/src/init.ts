import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import pc from 'picocolors';

export async function initProject() {
  const root = process.cwd();
  
  // 1. Création du fichier de configuration
  const configPath = path.join(root, 'kitoko.config.json');
  const defaultConfig = {
    version: "2.0.0",
    componentsDir: "./packages",
    mainScss: "./scss/kitoko.scss",
    framework: "standalone" // Maybe 'node', 'php', 'django'
  };

  if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    console.log(pc.gray(`   Creating kitoko.config.json`));
  }

  // 2. Création de l'arborescence SCSS de base
  const scssDir = path.join(root, 'scss');
  const mainScssPath = path.join(scssDir, 'kitoko.scss');

  if (!fs.existsSync(scssDir)) {
    fs.mkdirSync(scssDir);
    console.log(pc.gray(`   Creating the /scss folder`));
  }

  if (!fs.existsSync(mainScssPath)) {
    const initialContent = `// KitokoCSS - Main Entry\n// Initialized on ${new Date().toLocaleDateString()}\n\n@use "variables";\n`;
    fs.writeFileSync(mainScssPath, initialContent);
    console.log(pc.gray(`   Creating scss/kitoko.scss`));
  }

  // 3. Création d'un fichier de variables par défaut
  const varPath = path.join(scssDir, '_variables.scss');
  if (!fs.existsSync(varPath)) {
    const varContent = `:root {\n  --ktk-primary: #00e676;\n  --ktk-secondary: #2979ff;\n  --ktk-dark: #1a1a1a;\n  --ktk-surface: #ffffff;\n}\n`;
    fs.writeFileSync(varPath, varContent);
    console.log(pc.gray(`   Creating scss/_variables.scss`));
  }
}