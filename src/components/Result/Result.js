import React, { PureComponent } from 'react'
import Amazon from '../../services/amazon'

class Result extends PureComponent {
  state = {
    searchParams: [],
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Amazon answers={this.props.answersUser} searchParams={this.state.searchParams} />
      </div>
    )
  }
}

export default Result
