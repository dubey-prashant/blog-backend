const router = require('express').Router()
const Article = require('./../models/Article')

// @GET All articles
router.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    err
      ? //error message
      res.json({ error: err.message })
      : // array of articles
      res.json(articles)
  })
})

// @GET One article with articleId
router.get('/:articleId', (req, res) => {
  Article.findById(req.params.articleId, (err, article) => {
    err
      ? res.json({ error: err.message })
      : res.json(article)
  })
})

// @POST: Create article
router.post('/', (req, res) => {
  const newArticle = new Article(req.body)

  newArticle.save()
    .then(newArticle => {
      res.json({ newArticle: newArticle })
    })
    .catch(err => {
      console.log(err)
      res.send({ error: err.message })
    })
})

// @PUT: Update one article by articleID 
router.put('/:articleId', (req, res) => {

  Article.findByIdAndUpdate(
    req.params.articleId,
    req.body,
    (err, updatedArticle) => {
      err
        ? res.json({ error: err.message })
        : updatedArticle && res.json(updatedArticle)
    })

})

// @DELETE: delete one article
router.delete('/:id', (req, res) => {

  Article.findByIdAndDelete(
    req.params.id,
    (err, deletedArticle) => {
      err
        ? res.json({ error: err.message })
        : deletedArticle && res.json(deletedArticle)
    })
})

module.exports = router