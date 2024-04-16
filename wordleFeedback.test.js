const wordleFeedback = require('./wordleFeedback');

describe('Wordle Feedback Tests', () => {
  test('should return correct feedback for guess "CYKLA" vs word "CYKLA"', () => {
    const result = wordleFeedback('CYKLA', 'CYKLA');
    expect(result).toEqual([
      { letter: 'C', result: 'correct' },
      { letter: 'Y', result: 'correct' },
      { letter: 'K', result: 'correct' },
      { letter: 'L', result: 'correct' },
      { letter: 'A', result: 'correct' }
    ]);
  });

  test('should return correct feedback for guess "HALLÅ" vs word "CYKLA"', () => {
    const result = wordleFeedback('HALLÅ', 'CYKLA');
    expect(result).toEqual([
      { letter: 'H', result: 'incorrect' },
      { letter: 'A', result: 'misplaced' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'L', result: 'correct' },
      { letter: 'Å', result: 'incorrect' }
    ]);
  });

  // Add more test cases here...
});
