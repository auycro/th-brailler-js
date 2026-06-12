/*
 * th-mapping.js — Thai braille cells, grade 0 (uncontracted).
 *
 * Cell assignments follow the official Thai braille specification of the
 * Foundation for the Blind in Thailand (https://www.tab.or.th/braille_spec/thaibraille.pdf),
 * as encoded in the liblouis th-g0 table and verified against its test suite.
 *
 * Plain script: defines globals for main-brailler.js. Also works in Node.
 */

// Convert dot-number strings to braille characters, e.g. dots('356', '13') → '⠴⠅'.
// (Also defined in en-mapping.js so each mapping file is self-contained.)
function dots(...cells) {
  return cells
    .map((cell) =>
      String.fromCharCode(
        0x2800 + [...cell].reduce((mask, d) => mask | (1 << (d - 1)), 0)
      )
    )
    .join('');
}

const TH_MAP = {
  // Consonants
  ก: dots('1245'), ข: dots('13'), ฃ: dots('356', '13'), ค: dots('136'),
  ฅ: dots('36', '136'), ฆ: dots('6', '136'), ง: dots('12456'), จ: dots('245'),
  ฉ: dots('34'), ช: dots('346'), ซ: dots('2346'), ฌ: dots('6', '346'),
  ญ: dots('6', '13456'), ฎ: dots('6', '145'), ฏ: dots('6', '1256'),
  ฐ: dots('6', '2345'), ฑ: dots('6', '23456'), ฒ: dots('36', '23456'),
  ณ: dots('6', '1345'), ด: dots('145'), ต: dots('1256'), ถ: dots('2345'),
  ท: dots('23456'), ธ: dots('356', '23456'), น: dots('1345'), บ: dots('1236'),
  ป: dots('12346'), ผ: dots('1234'), ฝ: dots('1346'), พ: dots('1456'),
  ฟ: dots('1246'), ภ: dots('6', '1456'), ม: dots('134'), ย: dots('13456'),
  ร: dots('1235'), ล: dots('123'), ว: dots('2456'), ศ: dots('6', '234'),
  ษ: dots('36', '234'), ส: dots('234'), ห: dots('125'), ฬ: dots('6', '123'),
  อ: dots('135'), ฮ: dots('123456'),

  // Vowels
  'ะ': dots('1'), 'ั': dots('345'), 'า': dots('16'), 'ิ': dots('12'),
  'ี': dots('23'), 'ึ': dots('246'), 'ื': dots('26'), 'ุ': dots('14'),
  'ู': dots('25'), เ: dots('124'), แ: dots('126'), โ: dots('24'),
  'ำ': dots('1356'), ไ: dots('156'), ใ: dots('156', '2'),
  ฤ: dots('1235', '2'), ฦ: dots('123', '2'), 'ๅ': dots('5', '16'),

  // Tone marks and diacritics
  '่': dots('35'), '้': dots('256'), '๊': dots('2356'), '๋': dots('236'),
  '็': dots('3'), '์': dots('356'), 'ํ': dots('5'), 'ฺ': dots('3'),
  '๎': dots('4', '15'),

  // Signs
  'ๆ': dots('2'), 'ฯ': dots('56', '23'), '฿': dots('4', '12'),
  '๏': dots('4', '14'), '๚': dots('4', '256'), '๛': dots('4', '23'),
};

const TH_MULTI = {
  'ฯลฯ': dots('56', '123'), // paiyan yai
};

// Thai numerals map to the value of the corresponding Arabic digit.
const TH_DIGIT_VALUE = Object.fromEntries(
  [...'๑๒๓๔๕๖๗๘๙๐'].map((d, i) => [d, '1234567890'[i]])
);

if (typeof module !== 'undefined') {
  module.exports = { TH_MAP, TH_MULTI, TH_DIGIT_VALUE };
}

