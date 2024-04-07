const wordleFeedback = require('./wordleFeedback');

function testWordleFeedback() {
    const testCases = [
        { guess: "CYKLA", correctWord: "CYKLA", description: "all correct" },
        { guess: "ABCDE", correctWord: "FGHIJ", description: "all incorrect" },
        { guess: "BARON", correctWord: "BRAVO", description: "mixed misplaced and correct" },
        { guess: "BANAN", correctWord: "NABAB", description: "misplaced with duplicate letters" },
    ];

    testCases.forEach(({ guess, correctWord, description }) => {
        console.log(`Test: ${description}`);
        const result = wordleFeedback(guess, correctWord);
        console.log(result);
    });
}

testWordleFeedback();
