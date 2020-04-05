const fs = require('fs');
const path = require('path');

const ranksFile = path.join(__dirname, '../data/HandRanks.dat');
const ranks = fs.readFileSync(ranksFile);

const { CARDS, HANDTYPES } = require('../constants');

function evaluateHand(cards) {
  if (!ranks) {
    throw new Error('HandRanks.dat not loaded');
  }

  if (cards.length !== 5 && cards.length !== 6 && cards.length != 7) {
    throw new Error(`Hand must be 5, 6, or 7 cards, but got ${cards.length}`);
  }

  // If passing in string formatted hand, convert first
  if (typeof cards[0] == 'string') {
    cards = cards.map((card) => {
      return CARDS[card.toLowerCase()];
    });
  }

  return evaluate(cards);
}

function evaluate(cards) {
  let p = 53;
  for (let i = 0; i < cards.length; i++) {
    p = evaluateCard(p + cards[i]);
  }

  if (cards.length === 5 || cards.length === 6) {
    p = evaluateCard(p);
  }

  return {
    type: p >> 12,
    rank: p & 0x00000fff,
    value: p,
    name: HANDTYPES[p >> 12],
  };
}

function evaluateCard(card) {
  return ranks.readUInt32LE(card * 4);
}

module.exports = {
  evaluateHand,
  evaluateCard,
  evaluate,
  CARDS,
  HANDTYPES,
  ranks,
};
