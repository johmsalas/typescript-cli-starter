import { log } from './logger';

const pkg = require('../package.json');

export const getPkgVerion = () => pkg.version || '0.0.0';

export const init = ({}) => {
  log('initializing');
};
