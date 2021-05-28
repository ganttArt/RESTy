import React from 'react';
import '../style/help.scss';

class Help extends React.Component {
  render() {
    return (
      <section id='help'>
        <h2>Help</h2>
        <p>Very simple. Input the url of the api you want to hit. Choose the HTTP request method by pushing the desired button (GET, POST, PUT, DELETE). You will need a body for POST and PUT requests so add a body in json format as so &#123;&quot;name&quot;: &quot;yourname&quot;&#125;. Then push send to make the request and see the results.</p>
      </section>
    );
  }
}

export default Help;
