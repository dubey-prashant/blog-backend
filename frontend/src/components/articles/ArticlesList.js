import test from "../../images/dubeytechCover.png"
function ArticlesList({ articles }) {

  return (
    <div className="ArticlesList">
      {articles.map(article => (
        <div className='article' key={article._id}>
          <img src={test} alt={article.title} />
          {/* <img src="https://picsum.photos/400/150" alt={article.title} /> */}
          <div className="content">
            <h2>
              <a href={`/article/${article._id}`}>{article.title}</a>
            </h2>
            <p className='date'>{new Date(article.date).toDateString()} </p>
            {/* <p className='summary'>{article.intro}</p> */}
            <p className='summary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium vero qui neque sequi optio atque laborum eveniet perferendis consequatur vel ratione, dolorem modi velit aliquam et ipsa porro? Pariatur. </p>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default ArticlesList