import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'
import './home.css'
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

    <div>{children()}</div>
    <nav
      className="navbar navbar-default navbar-bottom"
      role="navigation"
      style={{ marginBottom: 0 }}
    >
      <h4>Powered by Panthrax Digital</h4>
    </nav>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
