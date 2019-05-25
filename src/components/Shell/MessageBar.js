import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  border: 2px solid #AAAAAA;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.65rem;
  &::placeholder {
    color: #c6c6c6;
  }
  &:focus {
    border-color: #616061;
  }
`

function MessageBar(props) {
  return (
    <Wrapper>
      <Input type="text" placeholder={props.placeholder} />
    </Wrapper>
  )
}

MessageBar.propTypes = {
  placeholder: PropTypes.string
}

export default MessageBar
