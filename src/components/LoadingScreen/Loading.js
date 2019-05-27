import React from 'react'
import styled from 'styled-components'

import slack from 'assets/slackbot.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`

const Image = styled.img`
  border-radius: 5px;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1.5rem;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
`

const Subtitle = styled.p`
  color: #9e9e9e;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`

const Loader = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 5px solid #e2e2e2;
  border-radius: 80%;
  border-top-color: #52ADF4;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
`

function Loading(props) {
  return (
    <Wrapper>
      <Image src={slack} alt="" />
      <Title>Loading your tweets...</Title>
      <Subtitle>- Your friends at Twitter</Subtitle>
      <Loader />
    </Wrapper>
  )
}

export default Loading
