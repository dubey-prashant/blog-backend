import Helmet from 'react-helmet'

const MetaInfo = ({ title, keywords, description }) => {
  return (
    <Helmet>
      <title>{title} - dubeytech</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default MetaInfo