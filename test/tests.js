const test = QUnit.test;

function even(number) {
    if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

test('return true if even', function(assert) {
    const number = 10;
    const expect = true;
    const result = even(number);

    assert.equal(result, expect);
    
});

test('return false if off', function(assert){
    const number = 3;
    const expect = false;
    const result = even(number);

    assert.equal(result, expect);
})
// first parameter of test function is a string of what you want your test to do (or assert)
// second parameter of test function is another function that asserts your test,, eg assert.what you want it to do