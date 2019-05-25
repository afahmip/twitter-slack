import React from 'react'
import PropTypes from 'prop-types'
import Dashboard from 'components/Dashboard'

function TimelinePage(props) {
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
