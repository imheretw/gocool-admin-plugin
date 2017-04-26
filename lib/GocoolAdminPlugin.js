import path from 'path';
import { Plugin, Server, Logger } from 'gocool';
import routes from './routes';

export default class GocoolAdminPlugin extends Plugin {
  constructor() {
    super();

    this._logger = new Logger(this.constructor.name);

    this.on(Server.EVENTS.STARTED, () => {
      this._init();
    });
  }

  getRoutes() {
    return routes;
  }

  getViews() {
    const rootPath = path.normalize(__dirname);
    return [`${rootPath}/views`];
  }

  _init() {
    this._logger.debug(`Init ${this.constructor.name} plugin after server started`);
  }
}
