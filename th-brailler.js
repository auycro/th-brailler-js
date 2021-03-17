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
const lookupMap = {};

const th_consonant_braille = {
  ก:'\u281b',
  ข:'\u2805',
  ฃ:'\u2834'+'\u2805',
  ค:'\u2805',
  ฅ:'\u2824'+'\u2805',
  ฆ:'\u2820'+'\u2805',
  ง:'\u283b',
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

};

/*
่" ่"," ้"," ๊"," ๋"
*/

const th_tone_braille = {
  " ่":"",
  " ้":"",
  " ๊":"",
  " ๋":""
};

/*
"๑","๒","๓","๔","๕",
"๖","๗","๘","๙","๐",
*/

const number_brailler = {
  "๑":"",
  "๒":"",
  "๓":"",
  "๔":"",
  "๕":"",
  "๖":"",
  "๗":"",
  "๘":"",
  "๙":"",
  "๐":"",
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
      } else if (currentChar in th_tone_braille) {
        lookupMap[currentChar] = th_tone_braille[currentChar];
      } else {
        lookupMap[currentChar] = "?";
      }
    }
    output += lookupMap[currentChar];
  }

  return output;
}