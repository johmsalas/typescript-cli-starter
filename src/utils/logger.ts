import { Signale } from 'signale';

const options = {};

const signale = new Signale(options);

export const info = (msg: any) => signale.info(msg);
export const log = (msg: any) => signale.log(msg);
export const note = (msg: any) => signale.note(msg);
export const success = (msg: any) => signale.success(msg);
export const error = (msg: any) => signale.error(msg);
export const debug = (msg: any) => signale.debug(msg);
export const complete = (msg: any) => signale.complete(msg);
