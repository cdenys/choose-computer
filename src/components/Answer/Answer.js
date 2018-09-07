import React, { Component } from 'react'

class Answer extends Component {
  render() {
    return (
      <div>
        {(() => {
          switch (this.props.type) {
            case 'radio':
              return this.props.responses.map((response, index) => (
                <div key={response.id}>
                  <label htmlFor={response.id}>
                    <input
                      type={this.props.type}
                      name={this.props.name}
                      id={response.id}
                      defaultChecked={index === 0}
                      value={response.id}
                      onChange={this.props.onChangeValue}
                    />
                    {response.reponse}
                  </label>
                </div>
              ))
            case 'checkbox':
              return this.props.responses.map((response, index) => (
                <div key={response.id}>
                  <label htmlFor={response.id}>
                    <input
                      type={this.props.type}
                      name={this.props.name}
                      id={response.id}
                      value={response.id}
                      onChange={this.props.onChangeValue}
                      defaultChecked={index === 0}
                    />
                    {response.reponse}
                  </label>
                </div>
              ))
            case 'select':
              return (
                <select id={this.props.name} onChange={this.props.onChangeValue}>
                  {this.props.responses.map(response => (
                    <option key={response.id} value={response.id}>
                      {response.reponse}
                    </option>
                  ))}
                </select>
              )
            default:
              return null
          }
        })()}
      </div>
    )
  }
}

export default Answer
