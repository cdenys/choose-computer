import React, { PureComponent } from 'react'
import Radio from './components/Radio/Radio'
import Checkbox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'

class Answer extends PureComponent {
  render() {
    return (
      <div>
        {this.props.type === 'radio' && <Radio data={this.props} />}
        {this.props.type === 'checkbox' && <Checkbox data={this.props} />}
        {this.props.type === 'select' && <Select data={this.props} />}
      </div>
    )
  }
}

export default Answer
