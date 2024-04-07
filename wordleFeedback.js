function wordleFeedback(guess, correctWord) {
  const feedback = [];
  const usedLetters = {}; 

  for (let i = 0; i < correctWord.length; i++) {
      usedLetters[correctWord[i]] = (usedLetters[correctWord[i]] || 0) + 1;
      if (guess[i] === correctWord[i]) {
          feedback.push({ letter: guess[i], result: 'correct' });
          usedLetters[correctWord[i]] -= 1;
      } else {
          feedback.push({ letter: guess[i], result: 'pending' });
      }
  }

  feedback.forEach((item, index) => {
      if (item.result === 'pending') {
          if (correctWord.includes(item.letter) && usedLetters[item.letter] > 0) {
              feedback[index].result = 'misplaced';
              usedLetters[item.letter] -= 1;
          } else {
              feedback[index].result = 'incorrect';
          }
      }
  });

  return feedback;
}

module.exports = wordleFeedback;
