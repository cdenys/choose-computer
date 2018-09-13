import React, { PureComponent } from 'react'
import Answer from '../../components/Answer/Answer'
import styles from './Home.sass'
import questionsArray from '../../services/questions'
import Result from "../../components/Result/Result";

const defaultAnswers = questionsArray.map(({ reponses }) => [reponses[0].id])
defaultAnswers[0] = ['no']
defaultAnswers[1] = ['threed', 'text']
defaultAnswers[4] = ['more1000']

class Home extends PureComponent {
  state = {
    questionPosition: 0,
    answersUser: defaultAnswers,
    // used if i can access to api amazon
    querySearch: '',
  }

  next = () => {
    // boucle sur les reponses, utilisé pour les checkbox
    for (let x = 0; x < this.state.answersUser[this.state.questionPosition].length; x += 1) {
      const answer = questionsArray[this.state.questionPosition].reponses.find(y => y.id === this.state.answersUser[this.state.questionPosition][x])
      this.state.querySearch += `${answer.apiKey} `
    }

    this.setState(prevState => ({
      ...prevState,
      questionPosition: prevState.questionPosition + 1,
    }))
  }

  handleChangeValue = answersCurrentQuestion => {
    this.setState(prevState => {
      const answersUser = [...prevState.answersUser]
      answersUser[prevState.questionPosition] = answersCurrentQuestion
      return { ...prevState, answersUser }
    })
  }

  render() {
    if (this.state.questionPosition >= questionsArray.length)
      return (
        <div>
          <Result answersUser={this.state.answersUser} querySearch={this.state.querySearch} />
        </div>
      )

    const { question, name, reponses, type } = questionsArray[this.state.questionPosition]

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.title}>Choisir son ordinateur</h1>
        </header>
        <form>
          <fieldset>
            <legend>{question}</legend>
            <div>
              <Answer
                key={this.state.questionPosition}
                name={name}
                responses={reponses}
                type={type}
                onChange={this.handleChangeValue}
                answers={this.state.answersUser[this.state.questionPosition]}
              />
            </div>
          </fieldset>
        </form>
        <footer>
          <button type="button" onClick={this.next}>
            {this.state.questionPosition === questionsArray.length - 1 ? 'Resultat' : 'Suivant'}
          </button>
        </footer>
      </div>
    )
  }
}

export default Home
