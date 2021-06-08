// copy all the dist into a folder named git-release, publish it into git-release branch
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import ghpages from 'gh-pages';

const starfalldirname = path.resolve(fileURLToPath(import.meta.url), '../../starfall');
console.log(starfalldirname);

if (!fs.existsSync(path.resolve(starfalldirname, 'git-release'))) {
  fs.mkdirSync(path.resolve(starfalldirname, 'git-release'));
}

fs.copy(path.resolve(starfalldirname, 'lib'), path.resolve(starfalldirname, 'git-release/lib'));
fs.copy(
  path.resolve(starfalldirname, 'src/_theme'),
  path.resolve(starfalldirname, 'git-release/src/_theme')
);
fs.copy(
  path.resolve(starfalldirname, 'package.json'),
  path.resolve(starfalldirname, 'git-release/package.json')
);

ghpages.publish(
  path.resolve(starfalldirname, 'git-release'),
  {
    branch: 'git-release',
  },
  () => {
    console.log('👌');
  }
);
