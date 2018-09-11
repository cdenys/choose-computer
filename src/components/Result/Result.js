import React, { PureComponent } from 'react'

class Result extends PureComponent {
  state = {
    results: [],
  }

  componentDidMount() {
    // i can't access to the api ebay / amazon :(
    // i create a local .json with 6 computers on ebay to try fetch
    // run server: json-server -p 4000 --watch src/services/db.json
    const url = 'http://localhost:4000/findItemsByKeywordsResponse'
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(data => {
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
        {this.state.results.length > 0 ? (
          this.state.results.map(data => (
            <div key={data.itemId}>
              <a href={data.viewItemURL}>{data.title}</a>
              <img src={data.galleryPlusPictureURL}/>
            </div>
          ))
        ) : (
          <p>Chargement des offres</p>
        )}
      </div>
    )
  }
}

export default Result
