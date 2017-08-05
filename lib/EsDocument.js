import elasticsearch from 'elasticsearch-odm-5';

export default class EsDocument {
  static extends(model, options) {
    this.schema = new elasticsearch.Schema(options);
    this.model = elasticsearch.model(model, this.schema);
    return this.model;
  }
}
