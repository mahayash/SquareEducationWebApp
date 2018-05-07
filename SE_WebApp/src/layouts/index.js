import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'
//import './index.css'
import NavigationBar from '../components/Header/NavigationBar'

const TemplateWrapper = ({ children }) => (
  <div>
    {/* this is used to change the value in head tag */}
    <Helmet
      title="Square Education"
      meta={[
        { name: 'description', content: 'School Section & Grammar' },
        {
          name: 'keywords',
          content:
            'School, Tutoring, Grammar, English Grammar at Mira Bhayander',
        },
      ]}
    />
    {/* this is the header*/}
    <NavigationBar />
    {/* this is the content body page*/}

    <div
      style={{
        margin: '0 auto',
        width: '100%',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
