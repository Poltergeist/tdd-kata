import assert from 'assert';

describe('Tests', () => {
  describe('Default checks', function() {
    it('must not fail', () => {
        assert.equal(1, 1);
    });
  });

  describe('Function returns', () => {
    it('a string', () => {
      assert.equal(typeof awesomeFunction(), 'string');
    });
    it('takes a numer and returns that number as a string', () => {
      let number = 10;
      assert.equal(awesomeFunction(number), '' + number);
    });
  });
});

function awesomeFunction(number) {
  if (typeof number == 'number') {
    return '' + number;
  }
  return 'string';
}
