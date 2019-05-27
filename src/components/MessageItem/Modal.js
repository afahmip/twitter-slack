import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 5px;
  height: 1.5rem;
  width: 4rem;
  position: absolute;
  right: 0.5rem;
  top: -0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.22);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.22);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.22);
  }
  // z-index: 1;
`

const Separator = styled.div`
  background-color: #cccccc;
  width: 1px;
  height: 1.5rem;
`

const Button = styled.div`
  cursor: pointer;
  padding: 0.8rem 0.5rem;
  transition-duration: 0.2s;
  :hover {
    i {
      color: #3a4f8e;
    }
  }
`

function Modal(props) {
  return (
    <Wrapper>
      <Button>
        <i className="far fa-comment" />
      </Button>
      <Separator />
    </Wrapper>
  )
}

Modal.propTypes = {

}

export default Modal
