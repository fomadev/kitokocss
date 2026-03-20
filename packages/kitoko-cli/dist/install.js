import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import pc from 'picocolors';
export async function installModule(moduleName) {
    // 1. Simuler la recherche dans le registre
    // Dans le futur, on ira chercher sur npm ou un serveur distant
    const fullPackageName = moduleName.startsWith('kitoko-') ? moduleName : `kitoko-${moduleName}`;
    console.log(pc.gray(`Recherche de ${fullPackageName} dans le registre Kitoko...`));
    // 2. Logique d'importation automatique
    // On va ajouter l'importation dans le fichier scss/kitoko.scss
    const scssPath = path.resolve(process.cwd(), 'scss/kitoko.scss');
    if (fs.existsSync(scssPath)) {
        const importStatement = `\n@import "../packages/${fullPackageName}/src/${moduleName}";`;
        // Vérifier si déjà importé
        const content = fs.readFileSync(scssPath, 'utf8');
        if (content.includes(importStatement.trim())) {
            console.log(pc.yellow(`ℹLe module ${moduleName} est déjà présent dans votre bundle.`));
            return;
        }
        fs.appendFileSync(scssPath, importStatement);
        console.log(pc.blue(`Ajout de l'importation dans scss/kitoko.scss`));
    }
    else {
        throw new Error("Fichier scss/kitoko.scss introuvable à la racine.");
    }
}
//# sourceMappingURL=install.js.map