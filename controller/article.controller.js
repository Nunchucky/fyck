const { Article } = require("../model/article.model")

const createArticle = async (_req, res) => {
//     const Article = {
//     title: ...
//     bio: ...
//     author: ...
//   };
//      example
    // const { title, bio, author } = req.body;
    // const art = {title, bio, author}
    // const result = await new Article(art).save();
    console.log("hi");
    res.send("hhe");
};

const getArticles = async (req, res) => {
    //  const title = req.body
    //  const newArticle = await Article.create({title:title});
    //  newArticle.save();
    //  res.send(newArticle)
    res.send("kjhfb")
}

const getArticle = async (req, res) => {
    const result = await Article.find(req.params.id)
    res.send(result);
}
const deleteArticle = async ( req, res) => {
  const id = req.params.id
  await Article.deleteOne({ id })
  res.send("deleted")
}

module.exports = { createArticle, getArticle, getArticles, deleteArticle }