import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-left: 1.2rem;
  height: calc(100vh - 8.3rem);
  overflow: auto;
`

function Content(props) {
  const item = []
  for (let i = 0; i < 100; i++)
    item.push(<div>Hoho</div>)

  return (
    <Wrapper>
      {item}
    </Wrapper>
  )
}

export default Content
