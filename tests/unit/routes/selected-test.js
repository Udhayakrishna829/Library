import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | selected', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:selected');
    assert.ok(route);
  });
});
