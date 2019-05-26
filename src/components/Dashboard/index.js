import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

import Navbar from 'components/Navbar'
import Shell from 'components/Shell'
import mockTrends from 'mocks/trends.json'

function Dashboard(props) {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    setTrends(mockTrends[0].trends)
    // fetch('http://localhost:5000/api/trend')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //     setTrends(res[0].trends)
    //   })
  }, [])

  return (
    <div className="row">
      <Navbar
        trends={trends}
      />
      <Shell
        title={props.title}
        content={props.content}
        subtitle={props.subtitle}
        msgPlaceholder={props.msgPlaceholder}
      />
    </div>
  )
}

Dashboard.propTypes = {
  children: PropTypes.node,
  active: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.array,
  subtitle: PropTypes.string,
  msgPlaceholder: PropTypes.string
}

export default Dashboard
