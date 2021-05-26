import React from 'react';
import '../style/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      httpMethod: 'GET',
      url: '',
      body: ''
    }
  }

  radioButtonOnChange = (event) => this.setState({ httpMethod: event.target.value })

  urlOnChange = (event) => this.setState({ url: event.target.value })

  bodyOnChange = (event) => this.setState({ body: event.target.value })

  handleSubmit = async (event) => {
    event.preventDefault();
    let raw;

    if (this.state.httpMethod === 'GET' || this.state.httpMethod === 'DELETE'){
      raw = await fetch(this.state.url, {
        method: this.state.httpMethod,
      });
    } else {
      raw = await fetch(this.state.url, {
        method: this.state.httpMethod,
        body: this.state.body
      });
    }
    
    let data = await raw.json();
    let count = data.count;

    this.props.updateResults(JSON.stringify(data, null, 2), raw.headers, count);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label id='url-label'>
          Url:
            <input type="text" name="url" onChange={this.urlOnChange} />
        </label>
        <label id='body-label'>
          Body:
            <input type="text" name="body" onChange={this.bodyOnChange} />
        </label>
        <div id='http-method-buttons' onChange={this.radioButtonOnChange}>
          <label>
            <input type="radio" value="GET" name="httpMethod" />
            <div>GET</div>
          </label>
          <label>
            <input type="radio" value="POST" name="httpMethod" />
            <div>POST</div>
          </label>
          <label>
            <input type="radio" value="PUT" name="httpMethod" />
            <div>PUT</div>
          </label>
          <label>
            <input type="radio" value="DELETE" name="httpMethod" />
            <div>DELETE</div>
          </label>
        </div>
        <input type="submit" value="SEND"></input>
      </form>
    )
  }
}

export default Form;