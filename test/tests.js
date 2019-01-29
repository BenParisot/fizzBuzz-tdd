const test = QUnit.test;

test('time to write a test', function(assert) {
    assert.equal('hi', 'hello');
});

// first parameter of test function is a string of what you want your test to do (or assert)
// second parameter of test function is another function that asserts your test,, eg assert.what you want it to do