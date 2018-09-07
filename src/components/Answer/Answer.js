import React, { PureComponent } from 'react'
import Radio from './components/Radio/Radio'
import Checkbox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'

class Answer extends PureComponent {
  onChange = e => {
    const { checked, value } = e.target
    const { type } = this.props
    let newAnswers
    if (type === 'checkbox') {
      if (checked) {
        newAnswers = [...this.props.answers, value]
      } else {
        newAnswers = this.props.answers.filter(oldValue => oldValue !== value)
      }
    } else {
      // radio or select
      newAnswers = [value]
    }

    this.props.onChange(newAnswers)
  }

  render() {
    return (
      <div>
        {this.props.type === 'radio' && <Radio {...this.props} onChange={this.onChange} />}
        {this.props.type === 'checkbox' && <Checkbox {...this.props} onChange={this.onChange} />}
        {this.props.type === 'select' && <Select {...this.props} onChange={this.onChange} />}
      </div>
    )
  }
}

export default Answer
