import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-left: 1.2rem;
  height: calc(100vh - 8.3rem);
  overflow: hidden;
  transition-duration: 0.2s;
  &:hover {
    overflow: auto;
  }
`

function Content(props) {
  const item = []
  for (let i = 0; i < 100; i++)
    item.push(<div key={i}>Hoho</div>)

  return (
    <Wrapper>
      {item}
    </Wrapper>
  )
}

export default Content
