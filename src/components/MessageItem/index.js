import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify'
import processString from 'react-process-string'

import Modal from './Modal'

const Wrapper = styled.div`
  padding: 7px 27px;
  position: relative;
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
  flex-basis: calc(100% - 45px);
  padding-left: 10px;

  div:first-child {
    margin-bottom: 3px;

    a:first-child > span {
      color: #1D1C1D;
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
    color: #616061;
    font-size: 1rem;
  }
`

const Child = styled.div`
  margin-top: 8px;

  > div:first-child {
    background-color: #D0D0D0;
    width: 4px;
    margin: 0;
    border-radius: 50px;
    flex-basis: 10px;
    max-width: 4px;
  }
`

const ChildContent = styled.div`
  flex-basis: calc(100% - 15px);
  max-width: calc(100% - 15px);
  padding-left: 11px;
  
  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3px;

    img:first-child {
      width: 20px;
      height: 20px;
      border-radius: 3px;
      margin-right: 8px;
    }

    a:nth-child(2) > span {
      color: #1D1C1D;
      margin-right: 6px;
      font-size: 1rem;
      font-weight: bold;
      text-transform: lowercase;
    }

    span:last-child {
      font-weight: normal;
      font-size: 12px;
      color: #717274;
    }
  }
  p {
    color: #616061;
    font-size: 1rem;
  }
`

const Media = styled.div`
  margin-top: 10px;
  max-height: 23rem;
  max-width: 23rem;
  border-radius: 5px;
  overflow: hidden;

  > p {
    color: rgba(29, 28, 29, .7);
    font-size: 12px;
    margin-bottom: 5px;
  }

  > img {
    width: 100%;
    border-radius: 5px;
    // object-fit: cover;
  }
`

function urlify(text) {
  let config = [{
    regex: /@\w{1,15}\b/g,
    fn: (key, res) => <Link key={key} to={`/${res}`}>{res}</Link>
  }]
  return processString(config)(text)
}

function MessageItem(props) {
  const [show, setShow] = useState(false)
  const modal = <Modal message={props.message} />
  
  let child = null
  if (props.message.hasOwnProperty('child')) {
    child = <Child className="row">
      <div />
      <ChildContent>
        <div>
          <Link to={`/${props.message.child.username}`}>
            <img src={props.message.child.photo} alt="profpic" />
          </Link>
          <Link to={`/${props.message.child.username}`}>
            <span>{props.message.child.name}</span>
          </Link>
          <span>@{props.message.child.username}</span>
        </div>
        <div>
          <Linkify>
            <p>{urlify(props.message.child.text)}</p>
          </Linkify>
        </div>
      </ChildContent>
    </Child>
  }

  let media = null
  let mediaTitle = ''
  if (props.message.hasOwnProperty('media')) {
    media = []
    props.message.media.map((m, i) => {
      mediaTitle = m.replace('https://pbs.twimg.com/media/', '')
      media.push(
        <Media key={i}>
          <p>{mediaTitle}</p>
          <img src={m} alt="" />
        </Media>
      )
    })
  }

  return (
    <Wrapper
      className="row"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      { show ? modal : '' }
      <Image>
        <Link to={`/${props.message.username}`}>
          <img src={props.message.photo} alt="profpic" />
        </Link>
      </Image>
      <Content>
        <div>
          <Link to={`/${props.message.username}`}>
            <span>{props.message.name}</span>
          </Link>
          <span>@{props.message.username}</span>
        </div>
        <div>
          <Linkify>
            <p>{urlify(props.message.text)}</p>
          </Linkify>
          {media}
        </div>
        {child}
      </Content>
    </Wrapper>
  )
}

MessageItem.propTypes = {
  message: PropTypes.object
}

export default MessageItem
