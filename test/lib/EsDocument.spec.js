import { expect } from 'chai';
import EsIndex from '../../lib/EsIndex';
import EsDocument from '../../lib/EsDocument';

describe('Test EsDocument', () => {
  beforeEach(async () => {
    const index = new EsIndex({
      index: 'test',
    });
    await index.connect();
  });

  describe('create()', () => {
    it('should return closed issues', async () => {
      const UserDocument = EsDocument.extends('User', {
        first_name: { type: 'String', required: true },
      });

      const user = new UserDocument({
        first_name: 'kos huang',
      });

      await user.save();

      await user.update({
        first_name: 'kos',
      });

      expect(user.first_name).to.eq('kos');
    });
  });
});
