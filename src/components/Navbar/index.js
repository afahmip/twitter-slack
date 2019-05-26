import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './index.scss'
import Item from './Item'
import Title from './items/Title'
import Section from './items/Section'
import Part from './items/Part'

const Wrapper = styled.div`
  background-color: #3F0E40;
  height: 100vh;
  width: 220px;
`

function Navbar(props) {
  return (
    <Wrapper>
      <Item color="white">
        <Title />
      </Item>
      <div className="section">
        <Item color="#B29FB3">
          <Section title="Channels" />
        </Item>
        <Link to="/">
          <Item color="#B29FB3">
            <Part title="Timeline" icon="fas fa-home" />
          </Item>
        </Link>
        <Item color="#B29FB3">
          <Part title="Notifications" icon="fas fa-bell" />
        </Item>
      </div>
      <div className="section">
        <Item color="#B29FB3">
          <Section title="Direct Messages" />
        </Item>
      </div>
      <div className="section">
        <Item color="#B29FB3">
          <Section title="Worldwide Trends" />
        </Item>
      </div>
    </Wrapper>
  )
}

Navbar.propTypes = {
  active: PropTypes.number,
  title: PropTypes.string
}

export default Navbar
