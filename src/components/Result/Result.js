import React, { PureComponent } from 'react'

// i can't access to the api ebay / amazon :(
// i create a local .json with 6 computers on ebay to try fetch
// run server: json-server -p 4000 --watch src/services/db.json
const url = 'http://localhost:4000/findItemsByKeywordsResponse'

class Result extends PureComponent {
  state = {
    results: [],
    loading: true
  }

  componentDidMount() {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(data => {
        this.setState({
            results: data[0].searchResult[0].item,
            loading: false
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if(this.state.results.length > 0 && this.state.loading === false) {
      return (
        this.state.results.map(data => (
          <div key={data.itemId}>
            <a href={data.viewItemURL}>{data.title}</a>
            <img src={data.galleryPlusPictureURL}/>
          </div>
        ))
      );
    }

    if (this.state.loading) {
      return (<p>Chargement des offres</p>);
    }

    if (this.state.results.length === 0) {
      return (<p>Aucun article</p>);
    }

    return (<p>Erreur</p>);
  }
}

export default Result
