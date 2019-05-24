import React from 'react'
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
        <Item color="#937A94">
          <Section title="Channels" />
        </Item>
        <Item color="#937A94">
          <Part title="Timeline" icon="fas fa-home" />
        </Item>
        <Item color="#937A94">
          <Part title="Notifications" icon="fas fa-bell" />
        </Item>
      </div>
      <div className="section">
        <Item color="#937A94">
          <Section title="Direct Messages" />
        </Item>
      </div>
    </Wrapper>
  )
}

export default Navbar
