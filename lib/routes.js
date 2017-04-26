import { Router } from 'gocool';

import ApplicationController from './controllers/ApplicationController';

const router = new Router();

router.route('get', '/', ApplicationController, 'index');

export default [router.expressRouter];
