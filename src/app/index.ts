/**
 * Created by davidchains on 2/26/17.
 */

import * as services from './services';
export {App} from './app';
export {routes} from './routes';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    ...mapValuesToArray(services)

]