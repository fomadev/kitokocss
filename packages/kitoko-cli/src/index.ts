import { Command } from 'commander';
import pc from 'picocolors';
import { installModule } from './install.js';
import { generateModule } from './generate.js';
import { searchModules } from './search.js';
import { initProject } from './init.js';

const program = new Command();

program
  .name('kitoko')
  .description(`${pc.cyan('✨ KitokoCSS CLI')} - L'assistant intelligent pour un design révolutionnaire`)
  .version('2.0.0')
  .addHelpText('before', `
${pc.bold(pc.magenta('  _  ___ _        _         '))}
${pc.bold(pc.magenta(' | |/ (_) |_ ___ | | _____  '))}
${pc.bold(pc.magenta(' | \' /| | __/ _ \\| |/ / _ \\ '))}
${pc.bold(pc.magenta(' | . \\| | || (_) |   < (_) |'))}
${pc.bold(pc.magenta(' |_|\\_\\_|\\__\\___/|_|\\_\\___/ '))}
  ${pc.italic(pc.gray('Le design qui parle, le code qui chante.'))}
  `);

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
    } catch (error: any) {
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
    } catch (error: any) {
      console.error(pc.red(`\nErreur de génération : ${error.message}`));
    }
  });

// COMMANDE 3 : SEARCH
program
  .command('search')
  .description('Lister les modules disponibles sur le Cloud Kitoko')
  .action(async () => {
    console.log(pc.cyan(`\nConnexion au registre Kitoko...`));
    try {
      await searchModules();
    } catch (error: any) {
      console.error(pc.red(`\nImpossible de récupérer la liste : ${error.message}`));
    }
  });

// COMMANDE 4 : INIT
program
  .command('init')
  .description('Initialiser KitokoCSS dans un nouveau projet (crée la config et les dossiers)')
  .action(async () => {
    console.log(pc.magenta(`\nInitialisation de l'écosystème Kitoko...`));
    try {
      await initProject();
      console.log(pc.green(`\nVotre projet est maintenant "Kitoko-Ready" !`));
    } catch (error: any) {
      console.error(pc.red(`\nErreur d'initialisation : ${error.message}`));
    }
  });

program.parse();