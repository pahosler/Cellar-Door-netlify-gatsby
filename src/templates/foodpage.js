import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

<<<<<<< HEAD
import PDFrender from '../components/PDFrender'

export const FoodPageTemplate = ({ title, pdf_title, pdf_filename, menu }) => (
=======
export const FoodPageTemplate = ({
  menu
}) => (
>>>>>>> parent of f8174a2... Panic master (#3)
  <main
    style={{
      backgroundImage: `url('../img/main_background.png') no-repeat center center fixed`
    }}>
    <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      zIndex: -10
    }}>
    <div
      style={{
        position: 'fixed',
<<<<<<< HEAD
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        zIndex: -10,
      }}>
      <div
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          backgroundImage: `url("../img/main_background.png")`,
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -5,
        }}
      />
    </div>
    <h1 className="food-title">{title}</h1>
    <h2 className="pdf-title">{pdf_title}</h2>
    <div className="pdf-container">
      <PDFrender pdf={menu} pdf_filename={pdf_filename} />    
    </div>
=======
        height: '100%',
        width: '100%',
        backgroundImage: `url("../img/main_background.png")`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        zIndex: -5
      }}
    />
    </div>
    <embed src={menu} title="menu" style={{width:"100%", height:1500}} />  
>>>>>>> parent of f8174a2... Panic master (#3)
  </main>
)

FoodPageTemplate.propTypes = {
  menu: PropTypes.string
}

const FoodPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
<<<<<<< HEAD
      <FoodPageTemplate 
        title={frontmatter.title}
        pdf_title={frontmatter.pdf_title}
        pdf_filename={frontmatter.pdf_filename}
        menu={frontmatter.menu.publicURL}
=======
      <FoodPageTemplate
        menu={frontmatter.menu}
>>>>>>> parent of f8174a2... Panic master (#3)
      />
    </Layout>
  )
}

<<<<<<< HEAD
FoodPageTemplate.propTypes = {
  title: PropTypes.string,
  pdf_title: PropTypes.string,
  pdf_filename: PropTypes.string,
  menu: PropTypes.string
}

=======
>>>>>>> parent of f8174a2... Panic master (#3)
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
<<<<<<< HEAD
        title
        pdf_title
        pdf_filename
        menu {
          publicURL
        }
=======
        menu
>>>>>>> parent of f8174a2... Panic master (#3)
      }
    }
  }
`