/*
"ก","ข","ฃ","ค","ฅ",
"ฆ","ง","จ","ฉ","ช",
"ซ","ฌ","ญ","ฎ","ฏ",
"ฐ","ฑ","ฒ","ณ","ด",
"ต","ถ","ท","ธ","น",
"บ","ป","ผ","ฝ","พ",
"ฟ","ภ","ม","ย","ร",
"ล","ว","ศ","ษ","ส",
"ห","ฬ","อ","ฮ"
*/
const lookupMap = {' ': "<br/>"};

const th_consonant_braille = {
  ก: '\u281b',
  ข: '\u2805',
  ฃ: '\u2834'+'\u2805',
  ค: '\u2805',
  ฅ: '\u2824'+'\u2805',
  ฆ: '\u2820'+'\u2805',
  ง: '\u283b',
  จ: '\u281a',
  ฉ: '\u280c',
  ช: '\u282c',
  ซ: '\u282e',
  ฌ: '\u2820'+'\u282c',
  ญ: '\u2820'+'\u283d',
  ฎ: '\u2820'+'\u2819',
  ฏ: '\u2820'+'\u2833',
  ฐ: '\u2820'+'\u281e',
  ฑ: '\u2820'+'\u283e',
  ฒ: '\u2824'+'\u283e',
  ณ: '\u2820'+'\u281d',
  ด: '\u2819',
  ต: '\u2833',
  ถ: '\u281e',
  ท: '\u283e',
  ธ: '\u2834'+'\u283e',
  น: '\u281d',
  บ: '\u2827',
  ป: '\u282f',
  ผ: '\u280f',
  ฝ: '\u282d',
  พ: '\u2839',
  ฟ: '\u282b',
  ภ: '\u2820'+'\u2839',
  ม: '\u280d',
  ย: '\u283d',
  ร: '\u2817',
  ล: '\u2807',
  ว: '\u283a',
  ศ: '\u2820'+'\u280e',
  ษ: '\u2824'+'\u280e',
  ส: '\u280e',
  ห: '\u2813',
  ฬ: '\u2820'+'\u2807',
  อ: '\u2815',
  ฮ: '\u283f',
};

/*
"อะ","อา","อิ","อี",
"อึ","อื","อุ","อู",
"เอะ","เอ","แอะ","แอ",
"เอียะ","เอีย","เอือะ","เอือ",
"อัวะ","อัว","โอะ","โอ",
"เอาะ","ออ","เออะ","เออ",
"อำ","ใอ","ไอ","เอา",
"ฤ","ฤๅ","ฦ","ฦๅ"
*/

const th_vowel_braille = {
  ะ:'a',
};

/*
่" ่"," ้"," ๊", ๋","ั"
*/

const th_top_braille = {
  '่': "A",
  '้': "B",
  '๊': "C",
  '๋': "D",
  'ั': "E",
  '์': "F",
  '็': "G",
};

/*
"๑","๒","๓","๔","๕",
"๖","๗","๘","๙","๐",
*/

const number_brailler = {
  '๑': '1',
  '๒': '2',
  '๓': '3',
  '๔': '4',
  '๕': '5',
  '๖': '6',
  '๗': '7',
  '๘': '8',
  '๙': '9',
  '๐': '0',
};

function th_braillate(input) {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    if (!(currentChar in lookupMap)) {
      if (currentChar in th_consonant_braille) {
        lookupMap[currentChar] = th_consonant_braille[currentChar];
      } else if (currentChar in th_vowel_braille) {
        lookupMap[currentChar] = th_vowel_braille[currentChar];
      } else if (currentChar in th_top_braille) {
        lookupMap[currentChar] = th_top_braille[currentChar];
      } else {
        lookupMap[currentChar] = "?";
      }
    }
    output += lookupMap[currentChar];
  }

  return output;
}