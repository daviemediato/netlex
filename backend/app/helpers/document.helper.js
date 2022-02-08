module.exports = {
    // Q: O que pensei? 
    // A: A lógica está baseada na própria função stringToWordsArray()
    //    Assim ela irá retornar um array com todas as palavras do conteúdo do documento
    //    Para obter as palavras que queremos pode-se utilizar o filter e checar cada palavra
    //    Por fim, para obter o número de palavras, basta utilizar o length do array
    wordFrequency: function (doc, word) {
        const content = doc.content ? doc.content : doc;
        const allWords = this.stringToWordsArray(content);
        const wordsFiltered = allWords.filter(w => w.toLowerCase() === word.toLowerCase());
        const numberOfOcurrences = wordsFiltered ? wordsFiltered.length : 0;

        return numberOfOcurrences;
    },

    // Q: O que pensei?
    // A: A lógica está em realizar uma iteração letra por letra do conteúdo do documento
    //    Assim a frase é criada de forma dinâmica e a cada iteração é adicionado um caractere
    //    Porém é criado situações de parada para quando encontrar uma letra que esteja presente em "stopChars"
    //    Assim é possível verificar se nessa frase criada possui a palavra procurada em "word"
    //    Para filtrar ainda mais a frase, já que a mesma pode conter caracteres antes do ínicio da mesma, é
    //       utilizado o método search e em sequência o substring para obter apenas a frase que está no internalo específicado
    //    Por fim, é adicionado ao array de frases o resultado da frase desta busca
    wordSentences: function (doc, word) {
        const content = doc.content ? doc.content : doc;
        const contentLength = content.length;
        const stopChars = ['.', ':', ';', '\n'];
        let phrase = '';
        let arrayOfPhrases = [];

        for (let i = 0; i < contentLength; i++) {
            phrase += content[i];

            if (stopChars.includes(content[i])) {
                const isIncluded = phrase.toLowerCase().includes(word.toLowerCase());

                if (isIncluded) {
                    const indexOfFirstCapitalLetter = phrase.search(/[A-Z]/);
                    const finalPhraseResult = phrase.substring(indexOfFirstCapitalLetter,);

                    arrayOfPhrases.push(finalPhraseResult);
                }

                phrase = '';
            }
        }

        return arrayOfPhrases;
    },

    // Q: O que pensei?
    // A: A lógica está em buscar todas as palavras do conteúdo do documento
    //    Após é mapeado todos os resultados para que sejam case insensitive
    //    Assim é filtrado pelo tamanho da palavra em questão, excluindo as palavras menores que x caracteres
    //    Em sequência é criado um dicionário com todas as frequências de cada palavra que resultou do filtro
    //    Dessa forma, é criado uma lógica iterativa para obter o maior resultado deste dicionário a cada iteração
    //    Por fim, é retornado um dicionário contendo os y resultados com maior frequência que seja maiores que x caracteres
    topWords: function (doc, count, minWordLength) {
        const content = doc.content ? doc.content : doc;
        const isTestRunning = doc.content ? false : true;
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

        delete wordsFrequencyOrdered[undefined];
        return isTestRunning ? Object.keys(wordsFrequencyOrdered) : wordsFrequencyOrdered;
    },

    stringToWordsArray: function (text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    }
}

