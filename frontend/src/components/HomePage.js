import ArticlesList from './articles/ArticlesList.js'
import useFetch from '../js/useFetch'
import MetaInfo from './partials/MetaInfo.js'

const Homepage = () => {
  const { data: articles, isLoading, error } = useFetch('http://localhost:5000/api/articles')
  return (
    <>
      {/*  metaData */}
      <MetaInfo
        title={"Blog"}
        keywords={"programming, tech,dubeytech"}
        description={"A website where you get all your tech needs fullfilled."}
      />
      {/* Content */}
      <section className="cover">
        <div className="fade">
          <div className="welcome">
            <h1> dubeyTech </h1>
            <p>welcomes you to the future...</p>
          </div>
        </div>
      </section>

      <div className="container">
        <section>
          <h2 className="section-title">TOP POSTS</h2>
          {error && <div className='errorDiv'>{error}</div>}
          {isLoading && <div className='isLoading'>Loading..</div>}
          {articles && <ArticlesList articles={articles} />}
        </section>
      </div>
    </>
  )
}

export default Homepage