import React, { PureComponent } from 'react'

class Amazon extends PureComponent {

  render() {
    return (
        <div>
        {this.props.answers.map((value, i) => (
            <p key={i}>Réponse : {JSON.stringify(value)}</p>
        ))}</div>
    )
  }
}

export default Amazon
