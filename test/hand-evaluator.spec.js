const PokerEvaluator = require('../lib/PokerEvaluator');

describe('evalHand', function () {
  describe('should throw', function () {
    it('if 4 cards', function () {
      expect(function () {
        PokerEvaluator.evaluateHand(['As', 'Ac', 'Ad', '5s']);
      }).toThrow();
    });
    it('if 8 cards', function () {
      expect(function () {
        PokerEvaluator.evaluateHand([
          'As',
          'Ac',
          'Ad',
          '5s',
          'Ad',
          'Ah',
          '5c',
          '5s',
        ]);
      }).toThrow();
    });
  });
  it('5 cards, full house', function () {
    expect(PokerEvaluator.evaluateHand(['As', 'Ac', 'Ad', '5d', '5s'])).toEqual(
      {
        type: 7,
        rank: 148,
        value: 28820,
        name: 'FULL_HOUSE',
      }
    );
  });
  it('7 cards, straight flush', function () {
    expect(
      PokerEvaluator.evaluateHand(['As', 'Ks', 'Qs', 'Js', 'Ts', '3c', '5h'])
    ).toEqual({
      type: 9,
      rank: 10,
      value: 36874,
      name: 'STRAIGHT_FLUSH',
    });
  });
});
