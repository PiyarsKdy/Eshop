import { Helmet } from "react-helmet-async"

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content= {keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to Eshop',
    description: 'We sell the latest products for cheap.',
    keywords: 'electronics, buy electronic products, cheap electronic products'
};

export default Meta