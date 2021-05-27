import React from 'react';
import { If } from 'react-if';
import '../style/history.scss';

class History extends React.Component {
  render() {
    return (
      <section id='history'>
        <h2>History</h2>
        <If condition={Object.keys(this.props.history).length > 0}>
          <ul>
            {Object.keys(this.props.history).map((key, idx) => {
              return (
                <>
                  <li>
                    <button value={key}>{key}</button>
                  </li>
                </>
              )
            })}
          </ul>
        </If>
      </section>
    );
  }
}

export default History;
