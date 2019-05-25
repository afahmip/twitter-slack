import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
`

const Bar = styled.div`
  border: 2px solid #AAAAAA;
  border-radius: 0.5rem;
  align-items: center;
`

const Button = styled.div`
  flex-basis: 2.5rem;
  color: #AAAAAA;
  text-align: center;
  cursor: pointer;
`

const Input = styled.input`
  flex-basis: calc(100% - 3.8rem - 5px);
  border: none;
  border-left: 2px solid #AAAAAA;
  font-size: 1rem;
  padding: 0.65rem;
  &::placeholder {
    color: #c6c6c6;
  }
  &:focus {
    border-color: #616061;
  }
`

function MessageBar(props) {
  const [status, setStatus] = useState('')

  let sendStatus = () => {
    fetch('http://localhost:5000/api/tweet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status})
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <Wrapper>
      <Bar className="row">
        <Button onClick={() => sendStatus()}>
          <i className="fas fa-share" />
        </Button>
        <Input
          type="text"
          value={status}
          onInput={e => setStatus(e.target.value)}
          placeholder={props.placeholder}
        />
      </Bar>
    </Wrapper>
  )
}

MessageBar.propTypes = {
  placeholder: PropTypes.string
}

export default MessageBar
