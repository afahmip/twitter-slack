import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import OAuth from 'oauth'

import Dashboard from 'components/Dashboard'

function TimelinePage(props) {
  useEffect(() => {
    fetch('http://localhost:5000/api/timeline')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
  })

  return (
    <Dashboard
      title="#timeline"
      msgPlaceholder="What's happening?"  
    />
  )
}

TimelinePage.propTypes = {

}

export default TimelinePage;
