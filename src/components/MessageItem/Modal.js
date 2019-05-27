import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import MessageInteractionStore from 'stores/MessageInteractionStore'

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
  i {
    color: #515151;
  }
  :hover {
    i {
      color: #3a4f8e;
    }
  }
`

const Modal = observer((props) => {
  let setData = () => {
    console.log(props.message)
    MessageInteractionStore.setActive(true)
    MessageInteractionStore.setMessage(props.message)
  }

  return (
    <Wrapper>
      <Button onClick={() => setData()}>
        <i className="far fa-comment" />
      </Button>
      <Separator />
    </Wrapper>
  )
})

Modal.propTypes = {
  message: PropTypes.object
}

export default Modal
