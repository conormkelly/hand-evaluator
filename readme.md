# Poker Hand Evaluator

Intended for use as a library to evaluate hands in a Texas Hold 'Em game engine.

It uses the [Two Plus Two algorithm](https://github.com/tangentforks/TwoPlusTwoHandEvaluator) and lookup table.
The lookup table HandRanks.dat is included in the _data_ folder.

It is capable of evaluating 5, 6 and 7 card hands (hole cards + flop, turn and river).

Hands can be evaluated by comparing the _type_ then the _rank_ to determine the better hand.
When comparing hands, the highest _value_ is the winner.

Run `npm test` to check out the speed test - this can evaluate about 200 million hands per second on a Ryzen 5 2600.

## Usage

```js
const HandEvaluator = require('./lib/hand-evaluator');

HandEvaluator.evaluateHand(['As', 'Ks', 'Qs', 'Js', 'Ts', '3c', '5h']);

//{ type: 9,
//  rank: 10,
//  value: 36874,
//  name: 'STRAIGHT_FLUSH' }

HandEvaluator.evaluateHand(['As', 'Ac', 'Ad', '5d', '5s']);

//{ type: 7,
//  rank: 148,
//  value: 28820,
//  name: 'FULL_HOUSE' }
```

## Credit

Forked from [chenosaurus' poker evaluator](https://github.com/chenosaurus/poker-evaluator).
