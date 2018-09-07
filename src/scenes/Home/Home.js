import React, { PureComponent } from 'react'
import Answer from '../../components/Answer/Answer'
import styles from './Home.sass'
import questionsArray from '../../services/questions'

class Home extends PureComponent {
  state = {
    questionPosition: 0,
    answersUser: [],
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
    const data = questionsArray[this.state.questionPosition]

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.title}>Choisir son ordinateur</h1>
        </header>
        <form>
          <fieldset>
            <legend>{data.question}</legend>
            <div>
              <Answer
                key={this.state.questionPosition}
                name={data.name}
                responses={data.reponses}
                type={data.type}
                onChange={this.handleChangeValue}
              />
            </div>
          </fieldset>
        </form>
        <footer>
          {this.state.questionPosition === questionsArray.length - 1 ? (
            <button type="button" onClick={this.next}>
              Résultat
            </button>
          ) : (
            <button type="button" onClick={this.next}>
              Suivant
            </button>
          )}
        </footer>
      </div>
    )
  }
}

export default Home
