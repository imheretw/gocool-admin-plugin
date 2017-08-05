import { expect } from 'chai';
import EsIndex from '../../lib/EsIndex';

describe('Test EsIndex', () => {
  describe('create()', () => {
    let index;
    beforeEach(() => {
      index = new EsIndex({
        index: 'test',
      });
    });

    it('should have connect()', async () => {
      expect(index.connect).to.exist;
    });

    describe('connect()', () => {
      it('should success', async () => {
        await index.connect();
        expect(index.connected).be.true;
      });
    });
  });
});
