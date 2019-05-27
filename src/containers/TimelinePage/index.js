import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { differenceInMinutes } from 'date-fns'

import Dashboard from 'components/Dashboard'
import LoadingScreen from 'components/LoadingScreen'
import TimelineStore from 'stores/TimelineStore'

const TimelinePage = observer(() => {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)

  let isGetNewTimeline = () => {
    const currTime = new Date()
    const oldCreatedAt = new Date(TimelineStore.storedCreatedAt)
    const diff = differenceInMinutes(currTime, oldCreatedAt)
    // console.log(diff, currTime, oldCreatedAt)
    return diff >= 3
  }

  useEffect(() => {
    if (isGetNewTimeline()) {
      fetch('http://localhost:5000/api/timeline')
        .then(res => res.json())
        .then(res => {
          // console.log(res)
          TimelineStore.clearStoredData()
          TimelineStore.setTweets(res)
          TimelineStore.setCreatedAt(new Date())
          setTweets(TimelineStore.tweets)
          setLoading(false)
        })
        .catch(err => console.error(err))
    } else {
      setTweets(TimelineStore.storedTweets)
      setLoading(false)
    }
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <Dashboard
      title="#timeline"
      subtitle="your friends"
      msgPlaceholder="What's happening?"
      content={tweets}
    />
  )
})

export default TimelinePage
