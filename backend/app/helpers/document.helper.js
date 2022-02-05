module.exports = {
    wordFrequency: function (doc, word) {
        const content = doc.content;
        const searchResult = content.toString().match(new RegExp(word, 'gi'));
        const numberOfOcurrences = searchResult ? searchResult.length : 0;

        return numberOfOcurrences;
    },

    wordSentences: function (doc, word) {
        const content = doc.content;
        const contentLength = content.length;
        const stopChars = ['.', ':', ';', '\n'];
        let phrase = '';
        let arrayOfPhrases = [];

        for (let i = 0; i < contentLength; i++) {
            phrase += content[i];

            if (stopChars.includes(content[i])) {
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
        const content = doc.content;
        const allDocWords = this.stringToWordsArray(content);
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

        // será retornado um dicionário já ordenado com chave/quantidade
        return wordsFrequencyOrdered;
    },

    stringToWordsArray: function (text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    }
}

