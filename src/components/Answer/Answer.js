import React, { PureComponent } from 'react'
import Radio from './components/Radio/Radio'
import Checkbox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'

class Answer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { answers: [] }
  }

  cb = () => this.props.onChange(this.state.answers)

  onChange = e => {
    const { checked, value } = e.target
    const { type } = this.props
    if (type === 'checkbox') {
      if (checked) {
        this.setState(
          prevState => ({
            answers: [...prevState.answers, value],
          }),
          this.cb
        )
      } else {
        this.setState(
          prevState => ({
            answers: prevState.answers.filter(oldValue => oldValue !== value),
          }),
          this.cb
        )
      }
    } else {
      this.setState({ answers: [value] }, this.cb)
    }
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
