import React, { useEffect, useState } from 'react'

import Dashboard from 'components/Dashboard'
import LoadingScreen from 'components/LoadingScreen'

function ProfilePage(props) {
  const [tweets, setTweets] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  let { id } = props.match.params

  id = id.replace('@', '')

  const createTweet = (r) => {
    let item = {
      username: r.user.screen_name,
      name: r.user.name,
      photo: r.user.profile_image_url_https,
      text: r.text
    }
    if (r.quoted_status) {
      const q = r.quoted_status
      item.child = {
        username: q.user.screen_name,
        name: q.user.name,
        photo: q.user.profile_image_url_https,
        text: q.text
      }
    }
    if (r.extended_entities) {
      if (r.extended_entities.media) {
        const data = []
        r.extended_entities.media.map(m => {
          if (m.type === 'photo') data.push(m.media_url_https)
        })
        item.media = data
      }
    }
    return item
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
      .then(res => res.json())
      .then(res => {
        let data = []
        setUser({
          name: res[0].user.name,
          screen_name: res[0].user.screen_name,
        })
        res.map(r => data.push(createTweet(r)))
        setTweets(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <Dashboard
      title={user.name}
      subtitle={user.screen_name}
      msgPlaceholder={`Tweet to @${user.screen_name}...`}
      content={tweets}
    />
  )
}

export default ProfilePage
