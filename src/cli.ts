import { command, parse, version, outputHelp } from 'commander';

import { getPkgVerion, init } from '.';
import { success } from './signal';

const { argv } = process;
const _version = getPkgVerion();
const _versionPrint = () => success(`Version: ${_version}`);

(() => {
  command('init')
    .option('-i, --init', 'Initialize something')
    .description('Initialize something')
    .action(init);

  command('version')
    .option('', 'Get package version')
    .description('Get package version')
    .action(() => _versionPrint());

  version(_version, '-v, --version');

  if (!argv.slice(2).length) {
    outputHelp();
  }

  parse(argv);
})();
