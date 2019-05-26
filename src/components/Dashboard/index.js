import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

import Navbar from 'components/Navbar'
import Shell from 'components/Shell'

function Dashboard(props) {
  return (
    <div className="row">
      <Navbar />
      <Shell
        title={props.title}
        content={props.content}
        subtitle={props.subtitle}
        msgPlaceholder={props.msgPlaceholder}
      />
    </div>
  )
}

Dashboard.propTypes = {
  children: PropTypes.node,
  active: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.array,
  subtitle: PropTypes.string,
  msgPlaceholder: PropTypes.string
}

export default Dashboard
