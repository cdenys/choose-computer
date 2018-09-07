import React, { PureComponent } from 'react'
import Answer from '../../components/Answer/Answer'
import styles from './Home.sass'
import questionsArray from '../../services/questions'

const defaultAnswers = questionsArray.map(({ reponses }) => [reponses[0].id])
defaultAnswers[0] = ['no']
defaultAnswers[1] = ['threed', 'text']
defaultAnswers[4] = ['more1000']

class Home extends PureComponent {
  state = {
    questionPosition: 0,
    answersUser: defaultAnswers,
  }

  next = () => {
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
          {this.state.answersUser.map((value, i) => (
            <p key={i}>Réponse : {JSON.stringify(value)}</p>
          ))}
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
