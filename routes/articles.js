const express = require('express');
const articlesRouter = express.Router();
const articles = require('../models/articles.json');
const { getArticles } = require('../controllers/articles');

articlesRouter.get('/', getArticles);

articlesRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const foundArticle = articles.find(article => article.id == id);
    if (foundArticle) {
        res.status(200).json(foundArticle);
    } else {
        res.status(404).send("Article Not Found");
    }
})

articlesRouter.post('/', (req, res) => {
    console.log({reqBody:req.body});
    const idArticle = Date.now()
    const {title} = req.body
    articles.push({id:idArticle, title})
    res.status(201).json({
        article: {id:idArticle, title:title},
        articles: articles
    })
})

module.exports = articlesRouter



