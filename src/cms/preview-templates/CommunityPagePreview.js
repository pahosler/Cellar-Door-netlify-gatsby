import React from 'react'
import PropTypes from 'prop-types'
import { CommunityPageTemplate } from '../../templates/community-page'

const CommunityPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
<<<<<<< HEAD
  const entryImages = entry.getIn(['data', 'gallery', 'images'])
  const images = entryImages ? entryImages.toJS() : []
=======
>>>>>>> parent of f8174a2... Panic master (#3)

  if (data) {
    return (
      <CommunityPageTemplate
        background_image={data.background_image}
        title={data.title}
<<<<<<< HEAD
        pdf_title={data.pdf_title}
        pdf_filename={data.pdf_filename}
        menu={data.menu}
        section_title={data.section_title}
        gallery={{ images }}
=======
>>>>>>> parent of f8174a2... Panic master (#3)
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CommunityPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CommunityPagePreview
