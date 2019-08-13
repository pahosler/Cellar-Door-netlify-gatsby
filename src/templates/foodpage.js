import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/foodanddrink.sass'

export const FoodPageTemplate = ({ menu }) => (
  <div
    style={{
      positon: 'relative',
      top: 'auto',
      left: 'auto',
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(../img/main_background.png)`,
    }}>
    <main>
      <embed src={menu} title="menu" style={{ width: '100%', height: 850 }} />
    </main>
  </div>
)

const FoodPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <FoodPageTemplate menu={frontmatter.menu.publicURL} />
    </Layout>
  )
}

FoodPageTemplate.propTypes = {
  menu: PropTypes.string,
}

FoodPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FoodPage

export const pageQuery = graphql`
  query FoodPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "foodpage" } }) {
      frontmatter {
        menu {
          publicURL
        }
      }
    }
  }
`
