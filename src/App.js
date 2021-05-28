import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import History from './components/History';
import Help from './components/Help';
import './style/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      results: null,
      headers: null,
      spinnerOn: false,
      history: { ...localStorage }
    }
  }

  updateResults = (results, headers, count) => {
    console.log(headers);
    this.setState({ results });
    this.setState({ headers });
    this.setState({ count });
  }

  updateSpinner = () => this.setState({ spinnerOn: !this.state.spinnerOn })

  updateHistory = (key, request) => {
    let newHistory = this.state.history;
    newHistory[key] = request;
    this.setState({ history: newHistory });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form
            updateResults={this.updateResults}
            updateSpinner={this.updateSpinner}
            updateHistory={this.updateHistory}
          />
          <section id='section-history-container'>
            <Switch>
              <Route path="/history">
                <History
                  history={this.state.history}
                  updateResults={this.updateResults}
                />
              </Route>
              <Route exact path="/">
                <Results
                  count={this.state.count}
                  headers={this.state.headers}
                  results={this.state.results}
                  spinnerOn={this.state.spinnerOn}
                />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
