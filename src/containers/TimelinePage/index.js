import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// import OAuth from 'oauth'

import mockTimeline from 'mocks/timeline.json'
import Dashboard from 'components/Dashboard'

function TimelinePage(props) {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    let data = []
    mockTimeline.map(r => {
      data.push({
        id: r.user.screen_name,
        name: r.user.name,
        photo: r.user.profile_image_url_https,
        text: r.text
      })
    })
    console.log(data)
    setTweets(data)
    // fetch('http://localhost:5000/api/timeline')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //     let data = []
    //     res.map(r => {
    //       data.push({
    //         name: r.user.name,
    //         photo: r.user.profile_image_url_https,
    //         text: r.text
    //       })
    //     })
    //     console.log(data)
    //     setTweets(data)
    //   })
    //   .catch(err => console.error(err))
  }, [])

  return (
    <Dashboard
      title="#timeline"
      msgPlaceholder="What's happening?"
      content={tweets}
    />
  )
}

TimelinePage.propTypes = {

}

export default TimelinePage;
