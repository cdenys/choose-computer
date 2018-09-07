import React, { PureComponent } from 'react'

class Select extends PureComponent {
  render() {
    return (
      <select id={this.props.name} onChange={this.props.onChange} name={this.props.name}>
        {this.props.responses.map(response => (
          <option key={response.id} value={response.id}>
            {response.reponse}
          </option>
        ))}
      </select>
    )
  }
}

export default Select
