import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import './style/app.scss';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      count: 0,
      results: null,
      headers: null,
      spinnerOn: false
    }
  }

  updateResults = (results, headers, count) => {this.setState({ results, headers, count })}

  updateSpinner = () => this.setState({ spinnerOn: !this.state.spinnerOn })

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form updateResults={this.updateResults} updateSpinner={this.updateSpinner}/>
          <Results
            count={this.state.count}
            headers={this.state.headers}
            results={this.state.results}
            spinnerOn={this.state.spinnerOn}
          />
        </main>
      </div>
    );
  }
}

export default App;
