const ArticleFormField = ({ article, setArticle, handleSubmit, isPosting }) => {

  const handleChange = (e) => {
    const { name, value } = e.target
    setArticle((previousValue) => {
      return {
        ...previousValue,
        [name]: value
      }
    })
  }
  return (
    <>
      <form className="ArticleFormField" onSubmit={handleSubmit} method="post">
        <label>Title:</label>
        <input
          autoComplete='off'
          name="title"
          type="text"
          value={article.title}
          onChange={(e) => handleChange(e)}
          required
        />
        <label>Body:</label>
        <textarea
          name="content"
          value={article.content}
          onChange={(e) => handleChange(e)}
          required
        ></textarea>
        <label>Author:</label>
        <input
          name="author"
          type="text"
          value={article.author}
          onChange={(e) => handleChange(e)}
          required
        />
        {!isPosting && <button>Submit</button>}
        {isPosting && <button disabled>Adding</button>}
      </form>
    </>
  )
}

export default ArticleFormField