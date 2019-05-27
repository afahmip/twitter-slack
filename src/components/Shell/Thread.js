import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MessageInteractionStore from 'stores/MessageInteractionStore'
import MessageItem from 'components/MessageItem'

const Wrapper = styled.div`
  border-left: 1px solid #e5e5e5;
  height: 100%;
`

const Header = styled.div`
  padding: 12px 27px;
  position: relative;
  background-color: #F8F8F8;
  border-bottom: 1px solid #e5e5e5;
  h1 {
    font-size: 18px;
    line-height: 1.33334;
    font-weight: 900;
  }
  p {
    font-size: 12px;
    line-height: 1.50001;
    font-weight: 400;
    color: rgba(29,28,29,.7);
  }
  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 15px;
    top: 10px;
    &:hover {
      background-color: #EBEBEB;
    }
  }
`

const Content = styled.div`
  padding-top: 10px;
`

const Thread = observer((props) => {
  useEffect(() => {
    console.log(props.message.name)
  }, [])

  return (
    <Wrapper>
      <Header>
        <h1>Thread</h1>
        <p>{props.message.name}</p>
        <div onClick={() => MessageInteractionStore.setActive(false)}>
          <i className="fas fa-times" />
        </div>
      </Header>
      <Content>
        <MessageItem
          id={props.message.id}
          name={props.message.name}
          photo={props.message.photo}
          text={props.message.text}
          child={props.message.child}
        />
      </Content>
    </Wrapper>
  )
})

Thread.propTypes = {
  close: PropTypes.func,
  message: PropTypes.object
}

export default Thread
