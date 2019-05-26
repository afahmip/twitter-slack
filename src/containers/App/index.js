import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TimelinePage from 'containers/TimelinePage'
import ProfilePage from 'containers/ProfilePage'
import './index.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:id" render={(props) => (
          <ProfilePage key={props.match.params.id} {...props} />
        )} />
        <Route path="/" exact component={TimelinePage} />
      </Switch>
    </div>
  );
}

export default App;
