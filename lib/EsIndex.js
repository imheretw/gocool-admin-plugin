import elasticsearch from 'elasticsearch-odm-5';

export default class EsIndex {
  constructor({ index }) {
    this.index = index;
    this.connected = false;
  }

  async connect() {
    await elasticsearch.connect(this.index);
    this.connected = true;
  }
}
