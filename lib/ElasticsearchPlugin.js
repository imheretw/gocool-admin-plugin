import { Plugin, Server, Logger } from 'gocool';
import EsIndex from './EsIndex';

export default class ElasticsearchPlugin extends Plugin {
  constructor(indexName) {
    super();

    this._logger = new Logger(this.constructor.name);
    this._indexName = indexName;

    this.on(Server.EVENTS.STARTED, () => {
      this._init();
    });
  }

  _init() {
    const index = new EsIndex({
      index: this._indexName,
    });

    return index.connect();
  }
}
