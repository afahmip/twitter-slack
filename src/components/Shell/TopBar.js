import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
`

const Data = styled.div`

`

function TopBar(props) {
  return (
    <Wrapper className="row">
      <Data>
        <h1>{props.title}</h1>
      </Data>
    </Wrapper>
  )
}

TopBar.propTypes = {
  title: PropTypes.string
}

export default TopBar
