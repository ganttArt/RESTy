import React from 'react';
import { If } from 'react-if';
import '../style/history.scss';

class History extends React.Component {
  handleClick = (key) => {
    let obj = JSON.parse(this.props.history[key]);
    console.log(obj);
    this.props.updateResults(
        JSON.stringify(obj.results, null, 2),
        JSON.stringify(obj.headers),
        obj.count,
    )
  }

  render() {
    return (
      <section id='history'>
        <If condition={Object.keys(this.props.history).length > 0}>
          <>
          <h2>History</h2>
            <ul>
              {Object.keys(this.props.history).map((key, idx) => {
                return (
                  <>
                    <li>
                      <button
                        value={key} 
                        onClick={() => this.handleClick(key)}
                      >
                        {key}
                      </button>
                    </li>
                  </>
                )
              })}
            </ul>
          </>
        </If>
      </section>
    );
  }
}

export default History;
