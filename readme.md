# Poker Hand Evaluator

Intended for use as a library to evaluate hands in a Texas Hold Em game engine.

It uses the [Two Plus Two algorithm](https://github.com/tangentforks/TwoPlusTwoHandEvaluator) and lookup table.
The lookup table HandRanks.dat is included in the module.

It is capable of evaluating 5, 6 and 7 card hands.

Hands can be evaluated by comparing the _type_ then the _rank_ to determine the better hand.
When comparing hands, the highest _value_ is the winner.

Run `npm test` to check out the speed test - this can evaluate over 130 million hands per second on my Ryzen 2600.

## Usage

```js
var PokerEvaluator = require("./lib/poker-evaluator");

PokerEvaluator.evaluateHand(["As", "Ks", "Qs", "Js", "Ts", "3c", "5h"]);

//{ type: 9,
//  rank: 10,
//  value: 36874,
//  name: 'STRAIGHT_FLUSH' }

PokerEvaluator.evaluateHand(["As", "Ac", "Ad", "5d", "5s"]);

//{ type: 7,
//  rank: 148,
//  value: 28820,
//  name: 'FULL_HOUSE' }
```

## Credit

Forked from [chenosaurus poker evaluator](https://github.com/chenosaurus/poker-evaluator).
