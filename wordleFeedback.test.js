const wordleFeedback = require('./wordleFeedback');

function testWordleFeedback() {
  const testCases = [
    { guess: 'CYKLA', correctWord: 'CYKLA', expected: 'all correct' },
    { guess: 'HALLÅ', correctWord: 'CYKLA', expected: 'some correct, some misplaced, some incorrect' },
    { guess: 'KLAPP', correctWord: 'CYKLA', expected: 'some correct, some incorrect' },
    { guess: 'LYKTA', correctWord: 'CYKLA', expected: 'some misplaced, some correct' },
    { guess: 'ALYCK', correctWord: 'CYKLA', expected: 'some misplaced, one incorrect' },
    // Lägg till fler testfall här om du vill ha mer heltäckande tester
  ];

  testCases.forEach(testCase => {
    const result = wordleFeedback(testCase.guess, testCase.correctWord);
    console.log(`Test for guess "${testCase.guess}" vs word "${testCase.correctWord}":`, result);

    let correctCount = result.filter(item => item.result === 'correct').length;
    let misplacedCount = result.filter(item => item.result === 'misplaced').length;
    let incorrectCount = result.filter(item => item.result === 'incorrect').length;
    
    let expectedCorrectCount = testCase.correctWord.split('').filter((c, i) => c === testCase.guess[i]).length;
    let expectedIncorrectCount = testCase.guess.split('').filter(c => !testCase.correctWord.includes(c)).length;
    
    let isTestPassing = 
      (correctCount === expectedCorrectCount) &&
      (incorrectCount === expectedIncorrectCount) &&
      (result.length - correctCount - incorrectCount === misplacedCount);

    console.log(`Test passed: ${isTestPassing}`);
  });
}

testWordleFeedback();
