const lookupMap = {
  ' ': "<br/>",
  '\n': "<br/>",
  '\r\n': "<br/>",
  '\t': "<br/>",
};

function numeric_converter(input){
  const stack = [];
  return "";
}

function braillate(input) {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    if (!(currentChar in lookupMap)) {
      if (currentChar.toLowerCase() in lowercase_alphabet_braille) {
        lookupMap[currentChar] = lowercase_alphabet_braille[currentChar.toLowerCase()];
      } else if (currentChar in en_number_braille) {
        lookupMap[currentChar] = en_number_braille[currentChar];
      } else if (currentChar in th_number_braille) {
        lookupMap[currentChar] = th_number_braille[currentChar];
      } else if (currentChar in th_consonant_braille) {
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