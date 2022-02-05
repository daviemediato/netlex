const { Router } = require('express');
const routes = new Router();
const checkLogin = require("../middlewares/auth.login");
const Document = require("../models/document.js");
const DocumentHelper = require("../helpers/document.helper");

routes.post(`/documents/word-frequency`, checkLogin, async (req, res) => {
    const document = await Document.findOne();
    const result = DocumentHelper.wordFrequency(document, req.body.word);

    if (!result) res.status(401).json({ error: 'No sentences found!' });

    res.send(result + "");
});

routes.post(`/documents/word-sentences`, checkLogin, async (req, res) => {
    const document = await Document.findOne();
    const result = DocumentHelper.wordSentences(document, req.body.word);

    if (!result) res.status(401).send({ error: 'No sentences found!' });

    res.send(result);
});

routes.post(`/documents/top-words`, checkLogin, async (req, res) => {
    const document = await Document.findOne();
    const result = DocumentHelper.topWords(document, req.body.count, req.body.minWordLength);

    if (!result) res.status(401).send({ error: 'Top Words not found!' });

    res.send(result);
});

module.exports = routes;