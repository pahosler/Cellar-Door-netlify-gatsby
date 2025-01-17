import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import CalendarPagePreview from './preview-templates/CalendarPagePreview'
import FoodPagePreview from './preview-templates/FoodPagePreview'
import CommunityPagePreview from './preview-templates/CommunityPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('calendar', CalendarPagePreview)
CMS.registerPreviewTemplate('foodpage', FoodPagePreview)
CMS.registerPreviewTemplate('community', CommunityPagePreview)