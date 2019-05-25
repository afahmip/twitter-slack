import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 1rem;
    flex-basis: 80%;
  }
  i {
    margin-top: 5px;
    font-size: 1rem;
    flex-basis: 20%;
    text-align: right;
  }
`

function Section(props) {
  return (
    <Wrapper className="row">
      <h1>{props.title}</h1>
      <i className="fas fa-chevron-circle-down"></i>
    </Wrapper>
  )
}

Section.propTypes = {
  title: PropTypes.string
}

export default Section
