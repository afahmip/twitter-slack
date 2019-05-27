import React from 'react'
import styled from 'styled-components'

import Loading from './Loading'

const Wrapper = styled.div`

`

const Navbar = styled.div`
  padding: 8px 12px 3px 18px;
  background-color: #3F0E40;
  height: calc(100vh - 11px);
  width: 190px;
`

const Shell = styled.div`
  padding: 8px 12px 3px 18px;
  width: calc(100% - 250px);
  height: calc(100vh - 11px);
`

const Item = styled.div`
  border-radius: 50px;
  height: 0.8rem;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: ${props => props.color};
  width: ${props => props.width};

  -webkit-animation: flickerAnimation 1s infinite;
  -moz-animation: flickerAnimation 1s infinite;
  -o-animation: flickerAnimation 1s infinite;
  animation: flickerAnimation 1s infinite;

  @keyframes flickerAnimation {
    0%   { opacity:1; }
    50%  { opacity:0.5; }
    100% { opacity:1; }
  }
  @-o-keyframes flickerAnimation{
    0%   { opacity:1; }
    50%  { opacity:0.5; }
    100% { opacity:1; }
  }
  @-moz-keyframes flickerAnimation{
    0%   { opacity:1; }
    50%  { opacity:0.5; }
    100% { opacity:1; }
  }
  @-webkit-keyframes flickerAnimation{
    0%   { opacity:1; }
    50%  { opacity:0.5; }
    100% { opacity:1; }
  }
`

const Section = styled.div`
  margin: 3rem 0;
  > div.row {
    > div:last-child {
      margin-left: 2.6rem;
    }
  }
`

function LoadingScreen(props) {
  return (
    <Wrapper className="row">
      <Navbar>
        <Item color="#854487" width="6rem" />
        <div className="row">
          <Item color="#572659" width="1rem" />
          <Item color="#572659" width="4rem" />
        </div>
        <Section>
          <div className="row">
            <Item color="#6d3470" width="7rem" />
            <Item color="#6d3470" width="1rem" />
          </div>
          <Item color="#6d3470" width="8rem" />
          <Item color="#6d3470" width="10rem" />
        </Section>
        <Section>
          <div className="row">
            <Item color="#6d3470" width="7rem" />
            <Item color="#6d3470" width="1rem" />
          </div>
        </Section>
        <Section>
          <div className="row">
            <Item color="#6d3470" width="7rem" />
            <Item color="#6d3470" width="1rem" />
          </div>
          <Item color="#6d3470" width="8rem" />
          <Item color="#6d3470" width="10rem" />
          <Item color="#6d3470" width="7rem" />
        </Section>
      </Navbar>
      <Shell>
        <Item color="#d3d3d3" width="10rem" />
        <Item color="#eaeaea" width="5rem" />
        <Loading />
      </Shell>
    </Wrapper>
  )
}

export default LoadingScreen
