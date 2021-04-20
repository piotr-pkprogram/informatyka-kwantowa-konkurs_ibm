const express = require('express');
const router = express.Router();
const compileMarkdownArticle = require('./compileMarkdownArticle.js');
const path = require('path');

router.get('/articleValue', compileMarkdownArticle);

module.exports = router;