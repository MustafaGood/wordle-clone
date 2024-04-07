function wordleFeedback(guess, correctWord) {
    const feedback = [];
    const correctPositions = new Array(correctWord.length).fill(false);

    guess.split('').forEach((letter, index) => {
        if (index < correctWord.length && letter === correctWord.charAt(index)) {
            feedback.push({ letter, result: 'correct' });
            correctPositions[index] = true;
        } else {
            feedback.push({ letter, result: null });
        }
    });

    feedback.forEach((item, index) => {
        if (item.result === null) {
            const letter = item.letter;
            const foundIndex = correctWord.indexOf(letter);
            if (foundIndex >= 0 && !correctPositions[foundIndex]) {
                correctPositions[foundIndex] = true;
                item.result = 'misplaced';
            } else {
                item.result = 'incorrect';
            }
        }
    });

    return feedback;
}

module.exports = wordleFeedback;
