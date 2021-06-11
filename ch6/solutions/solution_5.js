let words = ['people', 'us', 'iPhone', 'history', 'sandals', 'sevens', 'legends'];

for (let word of words) {
  if (word.indexOf('s') != -1) {
    words = words.filter((str) => word != str);
  }
}

console.log(words);
