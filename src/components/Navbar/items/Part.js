import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 1rem;
    flex-basis: 90%;
  }
  i {
    margin-top: 5px;
    font-size: 0.8rem;
    flex-basis: 10%;
  }
`

function Part(props) {
  return (
    <Wrapper className="row">
      <i className={props.icon} />
      <h1>{props.title}</h1>
    </Wrapper>
  )
}

Part.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

export default Part
