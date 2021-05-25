import React from 'react';
import '../style/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      httpMethod: '',
      url: ''
    }
  }

  radioButtonOnChange = (event) => this.setState({ httpMethod: event.target.value })

  urlOnChange = (event) => this.setState({ url: event.target.value })

  render() {
    return (
      <>
        <form>
          <label>
            Url:
            <input type="text" name="url" onChange={this.urlOnChange}/>
          </label>
          <div onChange={this.radioButtonOnChange}>
            <label>
              <input type="radio" value="GET" name="httpMethod"/>
              <div>GET</div>
            </label>
            <label>
              <input type="radio" value="POST" name="httpMethod"/>
              <div>POST</div>
            </label>
            <label>
              <input type="radio" value="PUT" name="httpMethod"/>
              <div>PUT</div>
            </label>
            <label>
              <input type="radio" value="DELETE" name="httpMethod"/>
              <div>DELETE</div>
            </label>
          </div>
        </form>
        <section>
          <ul>
            <li>URL: {this.state.url}</li>
            <li>HTTP Method: {this.state.httpMethod}</li>
          </ul>
        </section>
      </>
    )
  }
}

export default Form;