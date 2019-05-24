import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 5px 0;
  > div {
    margin-bottom: 5px;
    align-items: center;
  }
`

const Top = styled.div`
  i {
    color: #c6c6c6;
    margin-left: 10px;
    font-size: 0.5rem;
  }
`

const Bottom = styled.div`
  h1 {
    color: #c6c6c6;
    font-weight: normal;
    font-size: 0.9rem;
  }
  i {
    color: #32b594;
    font-size: 0.8rem;
    margin-right: 6px;
  }
`

function Title() {
  return (
    <Wrapper>
      <Top className="row">
        <h1>Twitter</h1>
        <i className="fas fa-chevron-down" />
      </Top>
      <Bottom className="row">
        <i className="fas fa-circle"></i>
        <h1>Fahmi</h1>
      </Bottom>
    </Wrapper>
  )
}

export default Title
