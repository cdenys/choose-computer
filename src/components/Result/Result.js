import React, { PureComponent } from 'react'

class Result extends PureComponent {
  state = {
    results: []
  }

  componentDidMount() {
    // i can't access to the api ebay / amazon :(
    // json-server -p 4000 --watch src/services/db.json
    const url = 'http://localhost:4000/findItemsByKeywordsResponse'
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(data => {
        console.log(data[0].searchResult[0].item)
        this.setState({
            results: data[0].searchResult[0].item,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        {this.props.answersUser.map((value, i) => (
            <p key={i}>Réponse : {JSON.stringify(value)}</p>
        ))}
      </div>
    )
  }
}

export default Result
