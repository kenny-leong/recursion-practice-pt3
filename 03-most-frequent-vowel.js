/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

Run tests on just this file by typing `npm test test/03-most-frequent-vowel-spec.js`
on the command line.

***********************************************************************/

const vowels = ['a', 'e', 'i', 'o', 'u'];
const mostFrequentVowel = function (words, counter = {}) {

    if (words.length === 0) {
      const check = Object.values(counter)
      if (check == false) {
        return '';
      } else {
        let highestValue = 0;
        let highestLetter;
        for (i=0;i<vowels.length;i++) {
          if (counter[vowels[i]] > highestValue) {
            highestValue = counter[vowels[i]];
            highestLetter = vowels[i];
          }
        }
        return highestLetter;
      }
    }

    let lastWord = words[words.length - 1].toLowerCase();

    let strList = lastWord.split('');
    let vowelsOnly = strList.filter(element => vowels.includes(element))

    for (i=0;i<vowelsOnly.length;i++) {
      if (counter[vowelsOnly[i]]) {
        counter[vowelsOnly[i]] += 1;
      } else {
        counter[vowelsOnly[i]] = 1;
      }
    }

    words.splice(words.length - 1, 1)

    return mostFrequentVowel(words, counter)

}

const mostFrequentVowel = (words, counter = {}) => {

  if (!words.length) {
    let highestCount = 0, mostFrequentVowel = '';
    Object.entries(counter).forEach(kVPair => {
      if (kVPair[1] > highestCount) mostFrequentVowel = kVPair[0], highestCount = kVPair[1]
    })
    return mostFrequentVowel
  }

  for (let letter of words.pop()) {
    if (VOWELS.includes(letter)) counter[letter] = counter[letter] + 1 || 1
  }

  return mostFrequentVowel(words, counter)
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
