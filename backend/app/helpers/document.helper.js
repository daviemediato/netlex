module.exports = {
    wordFrequency: function (doc, word) {
        const searchResult = doc.match(new RegExp(word, 'gi'));
        const numberOfOcurrences = searchResult ? searchResult.length : 0;

        return numberOfOcurrences;
    },

    wordSentences: function (doc, word) {
        const docLength = doc.length;
        const stopChars = ['.', ':', ';', '\n'];
        let phrase = '';
        let arrayOfPhrases = [];

        for (let i = 0; i < docLength; i++) {
            phrase += doc[i];

            if (stopChars.includes(doc[i])) {
                if (phrase.toLowerCase().includes(word.toLowerCase())) {
                    const indexOfFirstCapitalLetter = phrase.search(/[A-Z]/);
                    const finalPhraseResult = phrase.substring(indexOfFirstCapitalLetter,);

                    arrayOfPhrases.push(finalPhraseResult);
                }

                phrase = '';
            }
        }

        return arrayOfPhrases;
    },

    topWords: function (doc, count, minWordLength) {
        const allDocWords = this.stringToWordsArray(doc);
        const allDocWorsLowerCase = allDocWords.map((word) => { return word.toLowerCase(); });
        const filteredWords = allDocWorsLowerCase.filter((word) => word.length >= minWordLength);
        const maxIterations = count;
        const wordsFrequency = {};
        const wordsFrequencyOrdered = {};

        filteredWords.map((word) => wordsFrequency[word] = wordsFrequency[word] ? wordsFrequency[word] + 1 : 1)

        for (let it = 0; it < maxIterations; it++) {
            let maxKey, maxValue = 0;

            for (const [key, value] of Object.entries(wordsFrequency)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxKey = key;
                }
            }

            wordsFrequencyOrdered[maxKey] = maxValue;
            delete wordsFrequency[maxKey];
        }

        const wordsNames = Object.keys(wordsFrequencyOrdered);
        const wordsNamesFreq = Object.values(wordsFrequencyOrdered);

        return wordsNames;
    },

    stringToWordsArray: function (text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    }
}

