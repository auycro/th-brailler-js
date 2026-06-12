/*
 * main-brailler.js — Thai/English text to braille (grade 0, uncontracted).
 *
 * Translation logic only; the cell data lives in th-mapping.js and
 * en-mapping.js. Load order in the browser:
 *
 *   <script src="en-mapping.js"></script>
 *   <script src="th-mapping.js"></script>
 *   <script src="main-brailler.js"></script>
 *
 * Rules implemented:
 *  - Thai text is transliterated cell-by-cell in print order.
 *  - Arabic digits:  number sign ⠼ before each digit run (1.5 → ⠼⠁⠲⠑).
 *  - Thai digits:    ⠠⠼ before each digit run (๑๒ → ⠠⠼⠁⠃).
 *  - English capitals: capital sign ⠠ before the letter (UEB grade 1).
 *  - ฯลฯ is a single two-cell sign ⠰⠇.
 */

// In Node (e.g. `node test.js`) load the mapping files here;
// in the browser they are already loaded by the <script> tags above.
if (typeof module !== 'undefined' && typeof require === 'function') {
  Object.assign(globalThis, require('./en-mapping.js'), require('./th-mapping.js'));
}

const BLANK = dots('');        // ⠀ empty cell (space)
const CAP_SIGN = dots('6');    // ⠠ capital sign / Thai-digit prefix
const NUM_SIGN = dots('3456'); // ⠼ number sign

// Translate text to braille. Newlines are preserved; spaces become blank cells.
function braillate(text) {
  let out = '';
  let numberMode = null; // null | 'arabic' | 'thai'
  let quoteOpen = false;

  for (let i = 0; i < text.length; i++) {
    const multi = text.slice(i, i + 3);
    if (multi in TH_MULTI) {
      out += TH_MULTI[multi];
      numberMode = null;
      i += 2;
      continue;
    }

    const ch = text[i];
    const isDigit = ch in DIGIT_CELLS || ch in TH_DIGIT_VALUE;

    if (isDigit) {
      const mode = ch in TH_DIGIT_VALUE ? 'thai' : 'arabic';
      if (numberMode !== mode) out += (mode === 'thai' ? CAP_SIGN : '') + NUM_SIGN;
      numberMode = mode;
      out += DIGIT_CELLS[TH_DIGIT_VALUE[ch] || ch];
      continue;
    }

    // A decimal point keeps number mode (1.5 → ⠼⠁⠲⠑); anything else ends it.
    if (!(ch === '.' && numberMode && text[i + 1] in DIGIT_CELLS)) numberMode = null;

    if (ch === '\r') continue;
    if (ch === '\n') out += '\n';
    else if (ch === ' ' || ch === '\t') out += BLANK;
    else if (ch === '"') { out += quoteOpen ? QUOTE_CLOSE : QUOTE_OPEN; quoteOpen = !quoteOpen; }
    else if (ch.toLowerCase() in EN_LETTERS) {
      out += (ch === ch.toLowerCase() ? '' : CAP_SIGN) + EN_LETTERS[ch.toLowerCase()];
    }
    else out += TH_MAP[ch] || PUNCT[ch] || '?';
  }
  return out;
}

// HTML flavour for the demo page.
function braillateHtml(text) {
  return braillate(text).replace(/\n/g, '<br/>');
}

if (typeof module !== 'undefined') {
  module.exports = { braillate, braillateHtml };
}

