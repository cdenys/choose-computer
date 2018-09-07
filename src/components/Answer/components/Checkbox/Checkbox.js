import React, { PureComponent } from 'react'

class Checkbox extends PureComponent {
  render() {
    return this.props.responses.map((response, index) => (
      <div key={response.id}>
        <label htmlFor={response.id}>
          <input
            type={this.props.type}
            name={this.props.name}
            id={response.id}
            value={response.id}
            onChange={this.props.onChange}
            defaultChecked={index === 0}
          />
          {response.reponse}
        </label>
      </div>
    ))
  }
}

export default Checkbox
