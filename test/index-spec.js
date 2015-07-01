import assert from 'assert';

describe('Tests', () => {
  describe('Default checks', function() {
    it('must not fail', () => {
        assert.equal(1, 1);
    });
  });

  describe('Function', () => {
    it('returns a string', () => {
      assert.equal(typeof awesomeFunction(), 'string');
    });

    it('takes a number and returns that number as a string', () => {
      let number = 10;
      assert.equal(awesomeFunction(number), '' + number);
    });

    it('takes a date and returns that date as a string', () => {
      let date = new Date;
      assert.equal(awesomeFunction(date), date.toString());
    });

    it('takes a string and returns a string', () => {
      let string = 'awesomeString';
      assert.equal(awesomeFunction(string), string);
    });

  });
});

function awesomeFunction(parameter) {
  if (typeof parameter == 'number') {
    return '' + parameter;
  }
  if (parameter instanceof Date) {
    return '' + parameter;
  }
  if (typeof parameter == 'string') {
    return '' + parameter;
  }
  return 'string';
}
