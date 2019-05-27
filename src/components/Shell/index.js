import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import MessageInteractionStore from 'stores/MessageInteractionStore'
import TopBar from './TopBar'
import Content from './Content'
import MessageBar from './MessageBar'
import Thread from './Thread'

const Wrapper = styled.div`
  width: calc(100% - 220px);
`

const ContentWrapper = styled.div`
  > div:first-child {
    flex-basis: 55%;
  }
  > div: last-child {
    flex-basis: 45%;
  }
`

const Shell = observer((props) => {
  if (!MessageInteractionStore.active) {
    return (
      <Wrapper>
        <TopBar title={props.title} subtitle={props.subtitle} />
        <Content data={props.content} />
        <MessageBar placeholder={props.msgPlaceholder} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <TopBar title={props.title} subtitle={props.subtitle} />
      <ContentWrapper className="row">
        <div>
          <Content data={props.content} />
          <MessageBar placeholder={props.msgPlaceholder} />
        </div>
        <div>
          <Thread message={MessageInteractionStore.message}/>
        </div>
      </ContentWrapper>
    </Wrapper>
  )
})

Shell.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  subtitle: PropTypes.string,
  msgPlaceholder: PropTypes.string
}

export default Shell
