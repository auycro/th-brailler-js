/*
 * en-mapping.js — English braille cells (UEB grade 1), digits, punctuation.
 * Plain script: defines globals for main-brailler.js. Also works in Node.
 */

// Convert dot-number strings to braille characters, e.g. dots('356', '13') → '⠴⠅'.
function dots(...cells) {
  return cells
    .map((cell) =>
      String.fromCharCode(
        0x2800 + [...cell].reduce((mask, d) => mask | (1 << (d - 1)), 0)
      )
    )
    .join('');
}

const EN_LETTERS = {
  a: dots('1'), b: dots('12'), c: dots('14'), d: dots('145'), e: dots('15'),
  f: dots('124'), g: dots('1245'), h: dots('125'), i: dots('24'), j: dots('245'),
  k: dots('13'), l: dots('123'), m: dots('134'), n: dots('1345'), o: dots('135'),
  p: dots('1234'), q: dots('12345'), r: dots('1235'), s: dots('234'), t: dots('2345'),
  u: dots('136'), v: dots('1236'), w: dots('2456'), x: dots('1346'), y: dots('13456'),
  z: dots('1356'),
};

// Digits 1–9, 0 reuse the cells of letters a–j.
const DIGIT_CELLS = Object.fromEntries(
  [...'1234567890'].map((d, i) => [d, EN_LETTERS['abcdefghij'[i]]])
);

const PUNCT = {
  '.': dots('256'), ',': dots('2'), ';': dots('23'), ':': dots('25'),
  '?': dots('236'), '!': dots('235'), "'": dots('3'), '-': dots('36'),
  '/': dots('456', '34'), '(': dots('5', '126'), ')': dots('5', '345'),
  '+': dots('5', '235'), '=': dots('5', '2356'),
};

const QUOTE_OPEN = dots('236');
const QUOTE_CLOSE = dots('356');

if (typeof module !== 'undefined') {
  module.exports = { dots, EN_LETTERS, DIGIT_CELLS, PUNCT, QUOTE_OPEN, QUOTE_CLOSE };
}
