import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import { differenceInMinutes } from 'date-fns'

import Navbar from 'components/Navbar'
import Shell from 'components/Shell'
import TrendStore from 'stores/TrendStore'

const Dashboard = observer((props) => {
  const [trends, setTrends] = useState([])

  let isGetNewTrends = () => {
    const currTime = new Date()
    const oldCreatedAt = new Date(TrendStore.created_at)
    const diff = differenceInMinutes(currTime, oldCreatedAt)
    // console.log(diff, currTime, oldCreatedAt)
    return diff >= 5
  } 

  useEffect(() => {
    if (isGetNewTrends()) {
      fetch('http://localhost:5000/api/trend')
        .then(res => res.json())
        .then(res => {
          TrendStore.setTrends(res[0].trends)
          TrendStore.setCreatedAt(res[0].created_at)
          setTrends(res[0].trends)
          // console.log(res)
        })
    } else {
      setTrends(TrendStore.trends)
    }
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
})

Dashboard.propTypes = {
  children: PropTypes.node,
  active: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.array,
  subtitle: PropTypes.string,
  msgPlaceholder: PropTypes.string
}

export default Dashboard
