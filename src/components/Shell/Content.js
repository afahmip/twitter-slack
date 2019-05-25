import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MessageItem from 'components/MessageItem'

const Wrapper = styled.div`
  height: calc(100vh - 8rem);
  overflow: hidden;
  transition-duration: 0.2s;
  &:hover {
    overflow: auto;
  }
`

function Content(props) {
  const item = []
  props.data.map(d => {
    item.push(
      <MessageItem
        key={d.id}
        id={d.id}
        name={d.name}
        photo={d.photo}
        text={d.text}
      />
    )
  })

  return (
    <Wrapper>
      {item}
    </Wrapper>
  )
}

Content.propTypes = {
  data: PropTypes.array
}

export default Content
