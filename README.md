Thai Braille Converter Js

th-brailler-js
================

A JavaScript snippet to convert Thai (and English) characters into braille,
grade 0 (uncontracted).

Load index.html into your browser to see a simple demo.

Demo: https://auycro.github.io/th-brailler-js/

Usage
-----

### In the browser

Load the three scripts in this order (plain script tags — no build step,
no module loader, `index.html` works straight from `file://`):

```html
<script src="en-mapping.js"></script>
<script src="th-mapping.js"></script>
<script src="main-brailler.js"></script>
<script>
  braillate('ไก่');        // '⠱⠛⠔'  (plain text, \n preserved)
  braillate('Thai 1.5');   // '⠠⠞⠓⠁⠊⠀⠼⠁⠲⠑'
  braillateHtml('ไก่\nกา'); // '⠱⠛⠔<br/>⠛⠡'
</script>
```

### In Node.js

```js
const { braillate, braillateHtml } = require('./main-brailler.js');

console.log(braillate('อักษรเบรลล์')); // ⠕⠜⠛⠤⠎⠗⠋⠧⠗⠇⠇⠴
```

### Files

* `main-brailler.js` — translation logic: `braillate()`, `braillateHtml()`
* `th-mapping.js` — Thai consonants, vowels, tones, signs, numerals
* `en-mapping.js` — English letters, digit cells, punctuation

### Tests

Run `node test.js` to check the output against golden cases taken from the
official liblouis Thai test suite (written by the Thai braille fund and the
Foundation for the Blind in Thailand). The same tests run automatically on
every push via GitHub Actions (`.github/workflows/test.yml`).

Rules implemented
-----------------

* Thai characters are transliterated cell-by-cell in print order, using the
  cell assignments of the official Thai braille specification by the
  Foundation for the Blind in Thailand (https://www.tab.or.th/braille_spec/thaibraille.pdf).
* Arabic numbers get the number sign ⠼ (e.g. 1.5 → ⠼⠁⠲⠑).
* Thai numerals get the prefix ⠠⠼ (e.g. ๑๒ → ⠠⠼⠁⠃).
* English letters use UEB grade 1, with the capital sign ⠠ for capitals.
* Special signs: ๆ ฯ ฯลฯ ฿ ์ ็ ํ ฺ and basic punctuation.

License: MIT

See `CHANGELOG.md` for release notes.

References
----------

* https://www.tab.or.th/braille_spec/thaibraille.pdf (official spec)
* https://github.com/liblouis/liblouis (tables/th-g0.utb, tests/braille-specs/th.yaml)
* https://en.wikipedia.org/wiki/Thai_and_Lao_Braille
* http://doc2.clib.psu.ac.th/public13/thises/313218.pdf

This repo is inspired by [chromaconator-js](https://github.com/marissamarym/chromaconator-js)
