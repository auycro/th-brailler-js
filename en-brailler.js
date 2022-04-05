/*
"a","b","c","d","e",
"f","g","h","i","j",
"k","l","m","n","o",
"p","q","r","s","t",
"u","v","w","x","y",
"z"
*/

const lowercase_alphabet_braille = {
  a: '\u2801',
  b: '\u2803',
  c: '\u2809',
  d: '\u2819',
  e: '\u2811',
  f: '\u280b',
  g: '\u281b',
  h: '\u2813',
  i: '\u280a',
  j: '\u281a',
  k: '\u2805',
  l: '\u2807',
  m: '\u280d',
  n: '\u281d',
  o: '\u2815',
  p: '\u280f',
  q: '\u281f',
  r: '\u2817',
  s: '\u280e',
  t: '\u281e',
  u: '\u2825',
  v: '\u2827',
  w: '\u283a',
  x: '\u282d',
  y: '\u283d',
  z: '\u2835',
};

/*
"1","2","3","4",5",
"6",7","8","9","0",
*/

const en_number_braille = {
  '1': '\u2801',
  '2': '\u2803',
  '3': '\u2809',
  '4': '\u2819',
  '5': '\u2811',
  '6': '\u280b',
  '7': '\u281b',
  '8': '\u2813',
  '9': '\u280a',
  '0': '\u281a',
  'denote_num': '\u283c',
};

function en_braillate(input) {
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