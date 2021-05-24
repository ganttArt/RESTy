import React from 'react';
import '../style/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;