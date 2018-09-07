import React, { PureComponent } from 'react'

class Radio extends PureComponent {
  render() {
    return this.props.responses.map(response => (
      <div key={response.id}>
        <label htmlFor={response.id}>
          <input
            type={this.props.type}
            name={this.props.name}
            id={response.id}
            defaultChecked={this.props.answers.indexOf(response.id) !== -1}
            value={response.id}
            onChange={this.props.onChange}
          />
          {response.reponse}
        </label>
      </div>
    ))
  }
}

export default Radio
