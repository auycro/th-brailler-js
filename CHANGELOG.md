# Changelog

## [1.1.0] - 2026-06-12

### Changed
- Split the single `brailler.js` into three plain-script files, loaded the
  same simple way as the original version (no ES modules, no build step,
  no local server needed — `index.html` works via `file://`):
  - `th-mapping.js` — Thai consonants, vowels, tones, signs, numerals
  - `en-mapping.js` — English letters, digit cells, punctuation, quotes
  - `main-brailler.js` — the translation logic (`braillate`, `braillateHtml`)
- `node test.js` still works: `main-brailler.js` requires the mapping files
  itself when run under Node.

### Added
- GitHub Actions workflow (`.github/workflows/test.yml`) that runs `test.js`
  on every push and pull request.
- Usage section in `README.md`.

## [1.0.0] - 2026-06-12

Rewritten against the official Thai braille specification of the Foundation
for the Blind in Thailand, verified with golden cases from the official
liblouis Thai test suite (`node test.js`, 67 cases).

### Added
- Number sign ⠼ for Arabic digit runs, ⠠⠼ prefix for Thai numerals.
- Capital sign ⠠ for English capitals (UEB grade 1).
- Signs ๆ ฯ ฯลฯ ฿ ํ ฺ ๎ ๏ ๚ ๛ and basic punctuation.
- Test suite (`test.js`) with golden cases from the official liblouis
  Thai test suite.

### Fixed
- ค ฅ ฆ mapped to the ข cell (dots 13) instead of dots 136.
- Tone mark ๊ used an invalid 8-dot codepoint (U+2856) instead of ⠶ (dots 2356).
- ๅ missing its dot-5 prefix (ฤๅ → ⠗⠂⠐⠡).
- Spaces rendered as line breaks; now blank cells (⠀).
- Thai numerals output as literal ASCII digits.

### Changed
- Single `braillate()` replaces three duplicated functions; dead stubs removed.
- `braillate()` returns plain braille text; `braillateHtml()` for the demo page.
