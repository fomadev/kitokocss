import { Command } from 'commander';
import pc from 'picocolors';
import { installModule } from './install.js';
import { generateModule } from './generate.js'; // Nous allons créer ce fichier
const program = new Command();
program
    .name('kitoko')
    .description('L\'assistant intelligent de KitokoCSS')
    .version('2.0.0');
// COMMANDE 1 : INSTALL (Pour ce qui existe déjà)
program
    .command('install')
    .description('Installer un module existant (depuis le local ou le futur cloud)')
    .argument('<module>', 'nom du module à installer')
    .action(async (moduleName) => {
    console.log(pc.cyan(`\nRecherche du module : ${pc.bold(moduleName)}...`));
    try {
        await installModule(moduleName);
        console.log(pc.green(`\nModule ${pc.yellow(moduleName)} installé avec succès.`));
    }
    catch (error) {
        console.error(pc.red(`\nErreur : ${error.message}`));
    }
});
// COMMANDE 2 : GENERATE (Pour créer un nouveau truc)
program
    .command('generate')
    .alias('g') // Permet de faire : kitoko g footer
    .description('Générer le squelette d\'un nouveau module local')
    .argument('<module>', 'nom du module à créer')
    .action(async (moduleName) => {
    console.log(pc.magenta(`\nGénération du module local : ${pc.bold(moduleName)}...`));
    try {
        await generateModule(moduleName);
        console.log(pc.green(`\nNouveau module ${pc.yellow(moduleName)} créé et prêt à être codé !`));
    }
    catch (error) {
        console.error(pc.red(`\nErreur de génération : ${error.message}`));
    }
});
program.parse();
//# sourceMappingURL=index.js.map