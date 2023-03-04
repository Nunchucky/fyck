const express = require("express")
const { getArticle, getArticles, createArticle, deleteArticle } = require("../controller/article.controller")

const router = express.Router();

router
    .post("/create", createArticle)
    .get("/articles", getArticles)
    .get("/articles:id", getArticle)
    .delete("/delete",deleteArticle)

exports.articleRouter = router;