import { Plugin, Server, Logger } from 'gocool';
import elasticsearch from 'elasticsearch-odm';

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
    elasticsearch.connect(this._indexName);
  }
}
