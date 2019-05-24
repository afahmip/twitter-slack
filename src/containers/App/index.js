import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TimelinePage from 'containers/TimelinePage'
import './index.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={TimelinePage} />
      </Switch>
    </div>
  );
}

export default App;
