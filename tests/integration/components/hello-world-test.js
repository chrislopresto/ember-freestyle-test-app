import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hello-world', 'Integration | Component | hello world', {
  integration: true
});

test('it renders', function(assert) {
  let whitespaceRegex = /[\s\n]+/g;
  this.render(hbs`{{hello-world status='fine'}}`);

  assert.equal(this.$().text().trim().replace(whitespaceRegex, ' '), 'Hello World I am fine');
});
