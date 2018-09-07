import React, { PureComponent } from 'react'

class Radio extends PureComponent {
  render() {
    return this.props.data.responses.map((response, index) => (
      <div key={response.id}>
        <label htmlFor={response.id}>
          <input
            type={this.props.data.type}
            name={this.props.data.name}
            id={response.id}
            defaultChecked={index === 0}
            value={response.id}
            onChange={this.props.data.onChangeValue}
          />
          {response.reponse}
        </label>
      </div>
    ))
  }
}

export default Radio
