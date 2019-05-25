import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  padding: 7px 27px;
  &:hover {
    background-color: #F8F8F8;
  }
`

const Image = styled.div`
  flex-basis: 35px;
  max-width: 35px;
  img {
    width: 36px;
    height: 36px;
    border-radius: 3px;
  }
`

const Content = styled.div`
  flex-basis: calc(100% - 42px);
  padding-left: 7px;
  div:first-child {
    margin-bottom: 3px;
    span:first-child {
      font-size: 1rem;
      font-weight: bold;
      margin-right: 6px;
      text-transform: lowercase;
    }
    span:last-child {
      font-weight: normal;
      font-size: 12px;
      color: #717274;
    }
  }
  p {
    color: black;
    font-size: 1rem;
  }
`

function MessageItem(props) {
  return (
    <Wrapper className="row">
      <Image>
        <img src={props.photo} alt="profpic" />
      </Image>
      <Content>
        <div>
          <span>{props.name}</span>
          <span>@{props.id}</span>
        </div>
        <div>
          <p>{props.text}</p>
        </div>
      </Content>
    </Wrapper>
  )
}

MessageItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  text: PropTypes.string
}

export default MessageItem
