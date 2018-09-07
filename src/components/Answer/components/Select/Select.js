import React, { PureComponent } from 'react'

class Select extends PureComponent {
  render() {
    return (
      <select id={this.props.data.name} onChange={this.props.data.onChangeValue}>
        {this.props.data.responses.map(response => (
          <option key={response.id} value={response.id}>
            {response.reponse}
          </option>
        ))}
      </select>
    )
  }
}

export default Select
