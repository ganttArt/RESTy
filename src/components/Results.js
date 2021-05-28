import React from 'react';
import { If } from 'react-if';
import { Orbitals } from 'react-spinners-css';
import '../style/results.scss';

class Results extends React.Component {

  render() {
    return (
        <section id='results'>
          <If condition={this.props.spinnerOn}>
            <Orbitals color="#05386B" />
          </If>
          <If condition={this.props.results}>
            <ul>
              <li>Count: {this.props.count}</li>
              <li>Headers: {this.props.headers}</li>
              <li>Results:
              <pre>
                  <code>
                    {this.props.results}
                  </code>
                </pre>
              </li>
            </ul>
          </If>
        </section>
    )
  }
}

export default Results;