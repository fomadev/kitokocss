import { Command } from 'commander';
import pc from 'picocolors';
import { installModule } from './install.js';

const program = new Command();

program
  .name('kitoko')
  .description('CLI pour booster votre design avec KitokoCSS')
  .version('2.0.0');

// Commande : kitoko install <module>
program
  .command('install')
  .description('Installer un module Kitoko (ex: button, card, grid)')
  .argument('<module>', 'nom du module à installer')
  .action(async (moduleName) => {
    console.log(pc.cyan(`\nPréparation de l'installation du module : ${pc.bold(moduleName)}...`));
    
    try {
      await installModule(moduleName);
      console.log(pc.green(`\nSuccès ! Le module ${pc.yellow(moduleName)} est maintenant prêt dans KitokoCSS.`));
    } catch (error) {
      console.error(pc.red(`\nErreur : Impossible d'installer le module ${moduleName}.`));
    }
  });

program.parse();