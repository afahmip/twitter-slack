import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Navbar from 'components/Navbar'

function Dashboard(props) {
  return (
    <Navbar />
  )
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired
}

export default Dashboard
