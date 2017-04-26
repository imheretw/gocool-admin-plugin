import { Controller } from 'gocool';

export default class GithubController extends Controller {
  async index() {
    this.res.render('./gocool-admin-plugin/index', {
      title: 'Admin',
    });
  }
}
