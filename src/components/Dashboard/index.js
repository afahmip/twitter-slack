import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import { differenceInMinutes } from 'date-fns'

import Navbar from 'components/Navbar'
import Shell from 'components/Shell'
import TrendStore from 'stores/TrendStore'

const Dashboard = observer((props) => {
  const [hashtags, setHashtags] = useState([])

  let isGetNewTrends = () => {
    const currTime = new Date()
    const oldCreatedAt = new Date(TrendStore.storedCreatedAt)
    const diff = differenceInMinutes(currTime, oldCreatedAt)
    // console.log(diff, currTime, oldCreatedAt)
    return diff >= 10
  } 

  useEffect(() => {
    if (isGetNewTrends()) {
      fetch('http://localhost:5000/api/trend')
        .then(res => res.json())
        .then(res => {
          TrendStore.clearStoredData()
          TrendStore.setHashtags(res[0].trends)
          TrendStore.setCreatedAt(res[0].created_at)
          setHashtags(TrendStore.hashtags)
          // console.log(res)
        })
        .catch(err => console.error(err))
    } else {
      setHashtags(TrendStore.storedHashtags)
    }
  }, [])

  return (
    <div className="row">
      <Navbar
        trends={hashtags}
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
