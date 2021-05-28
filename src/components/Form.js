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
    this.props.updateSpinner();
    let raw, count, headers;

    if (this.state.httpMethod === 'GET' || this.state.httpMethod === 'DELETE'){
      raw = await fetch(this.state.url, {
        method: this.state.httpMethod,
      });
    } else {
      raw = await fetch(this.state.url, {
        method: this.state.httpMethod,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: this.state.body,
      });
    }

    console.log('raw', raw);
    let data = await raw.json();
    data.count ? count = data.count : count = 1;
    headers = raw.headers;

    this.props.updateSpinner();
    this.props.updateResults(JSON.stringify(data, null, 2), headers, count);

    let localStorageObject = {
      httpMethod: this.state.httpMethod,
      url: this.state.url,
      count: count,
      results: data,
      headers: headers
    }
    localStorage.setItem(`${this.state.httpMethod}_${this.state.url}`, JSON.stringify(localStorageObject));
    this.props.updateHistory(`${this.state.httpMethod}_${this.state.url}`, JSON.stringify(localStorageObject));
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