import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Navbar from 'components/Navbar'
import Shell from 'components/Shell'

function Dashboard(props) {
  return (
    <div className="row">
      <Navbar />
      <Shell title={props.title} />
    </div>
  )
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.number,
  title: PropTypes.string
}

export default Dashboard
