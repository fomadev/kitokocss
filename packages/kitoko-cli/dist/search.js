import https from 'node:https';
import pc from 'picocolors';
export async function searchModules() {
    // L'API GitHub pour lister le contenu d'un dossier
    // Remplace 'fomadev' par ton vrai pseudo GitHub
    const GITHUB_API_URL = `https://api.github.com/repos/fomadev/kitokocss/contents/packages/kitoko-core/src/components`;
    const options = {
        headers: { 'User-Agent': 'Kitoko-CLI' } // GitHub exige un User-Agent
    };
    https.get(GITHUB_API_URL, options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
            if (res.statusCode !== 200) {
                console.log(pc.red("The registry is temporarily unavailable."));
                return;
            }
            const files = JSON.parse(data);
            // On filtre pour ne garder que les fichiers .scss et on enlève le "_"
            const modules = files
                .filter((f) => f.name.endsWith('.scss'))
                .map((f) => f.name.replace('_', '').replace('.scss', ''));
            console.log(pc.white(`\nModules available in version 2.0.0 :\n`));
            modules.forEach((mod) => {
                console.log(`${pc.green('→')} ${pc.bold(mod)}`);
            });
            console.log(pc.gray(`\nUse "${pc.cyan('kitoko install <name>')}" to add one.`));
        });
    }).on('error', (err) => {
        throw err;
    });
}
//# sourceMappingURL=search.js.map