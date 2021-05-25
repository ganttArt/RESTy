import React from 'react';
import '../style/results.scss';

class Header extends React.Component {
  render() {
    return (
      <section>
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
      </section>
    )
  }
}

export default Header;