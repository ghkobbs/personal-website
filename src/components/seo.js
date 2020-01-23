import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
function SEO({ description, lang, meta, title }) {
  const { site, contentfulHomePage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            creator
            siteUrl
          }
        },
        contentfulHomePage {
          profile {
              title
              file {
                  url
              }
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:locale`,
          content: 'en_US',
        },
        {
          property: `og:image:type`,
          content: 'image/jpg',
        },
        {
          property: `og:image`,
          content: `https:${contentfulHomePage.profile.file.url}`,
        },
        {
          property: `og:image:width`,
          content: '250',
        },
        {
          property: `og:image:height`,
          content: '300',
        },
        {
          property: `og:image:alt`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.creator,
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.creator,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:image`,
          content: `https:${contentfulHomePage.profile.file.url}`,
        },
        {
          name: `twitter:image:alt`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
export default SEO