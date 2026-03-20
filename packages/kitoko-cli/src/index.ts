import { Command } from 'commander';
import pc from 'picocolors';
import { installModule } from './install.js';
import { generateModule } from './generate.js';
import { searchModules } from './search.js';
import { initProject } from './init.js';

const program = new Command();

program
  .name('kitoko')
  .description(`${pc.cyan('✨ KitokoCSS CLI')} - The intelligent assistant for a revolutionary design`)
  .version('2.0.0')
  .addHelpText('before', `
${pc.bold(pc.magenta('  _  ___ _        _         '))}
${pc.bold(pc.magenta(' | |/ (_) |_ ___ | | _____  '))}
${pc.bold(pc.magenta(' | \' /| | __/ _ \\| |/ / _ \\ '))}
${pc.bold(pc.magenta(' | . \\| | || (_) |   < (_) |'))}
${pc.bold(pc.magenta(' |_|\\_\\_|\\__\\___/|_|\\_\\___/ '))}
  ${pc.italic(pc.gray('The design that speaks, the code that sings.'))}
  `);

// COMMANDE 1 : INSTALL (Pour ce qui existe déjà)
program
  .command('install')
  .description('Install an existing module (from local storage or the future cloud))')
  .argument('<module>', 'name of the module to install')
  .action(async (moduleName) => {
    console.log(pc.cyan(`\nRecherche du module : ${pc.bold(moduleName)}...`));
    try {
      await installModule(moduleName);
      console.log(pc.green(`\nModule ${pc.yellow(moduleName)} installed successfully.`));
    } catch (error: any) {
      console.error(pc.red(`\nError : ${error.message}`));
    }
  });

// COMMANDE 2 : GENERATE (Pour créer un nouveau truc)
program
  .command('generate')
  .alias('g') // Permet de faire : kitoko g footer
  .description('Generate the skeleton of a new local module')
  .argument('<module>', 'name of the module to create')
  .action(async (moduleName) => {
    console.log(pc.magenta(`\nLocal module generation : ${pc.bold(moduleName)}...`));
    try {
      await generateModule(moduleName);
      console.log(pc.green(`\nNew module ${pc.yellow(moduleName)} created and ready to be coded!`));
    } catch (error: any) {
      console.error(pc.red(`\nGeneration error : ${error.message}`));
    }
  });

// COMMANDE 3 : SEARCH
program
  .command('search')
  .description('List the available modules on the Kitoko Cloud')
  .action(async () => {
    console.log(pc.cyan(`\nLogin to the Kitoko registry...`));
    try {
      await searchModules();
    } catch (error: any) {
      console.error(pc.red(`\nUnable to retrieve the list : ${error.message}`));
    }
  });

// COMMANDE 4 : INIT
program
  .command('init')
  .description('Initialize KitokoCSS in a new project (creates the config and directories)')
  .action(async () => {
    console.log(pc.magenta(`\nInitializing the Kitoko ecosystem...`));
    try {
      await initProject();
      console.log(pc.green(`\nYour project is now "Kitoko-Ready" !`));
    } catch (error: any) {
      console.error(pc.red(`\nInitialization error : ${error.message}`));
    }
  });

program.parse();