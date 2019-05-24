import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #3F0E40;
  height: 100vh;
  width: 220px;
`

function Navbar(props) {
  return (
    <Wrapper />
  )
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Navbar
