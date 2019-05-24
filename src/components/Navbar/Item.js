import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #3F0E40;
  padding: 2px 12px 2px 15px;
  cursor: pointer;
  * {
    font-size: 1.2rem;
    color: ${props => props.color};
  }
  &:hover {
    background-color: #350D36;
  }
`

function Item(props) {
  return (
    <Wrapper color={props.color}>
      {Children.toArray(props.children)}
    </Wrapper>
  )
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string
}

export default Item
