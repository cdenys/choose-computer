import React, { PureComponent } from 'react'
import Answer from '../../components/Answer/Answer'
import styles from './Home.sass'
import questionsArray from '../../services/questions'

class Home extends PureComponent {
  state = {
    questions: questionsArray,
    questionPosition: 0,
    questionLastIndex: questionsArray.length - 1,
    answersUser: [],
    answerValue: questionsArray[0].reponses[0].id,
  }

  save = () => {
    this.setState(prevState => ({
      answersUser: [...prevState.answersUser, prevState.answerValue],
    }))
  }

  saveAndGoTo = () => {
    this.save()
    this.setState(prevState => ({
      questionPosition: prevState.questionPosition + 1,
    }))

    if (questionsArray[this.state.questionPosition + 1].type === 'checkbox') {
      this.setState(prevState => ({
        answerValue: [questionsArray[prevState.questionPosition].reponses[0].id],
      }))
    } else {
      this.setState(prevState => ({
        answerValue: questionsArray[prevState.questionPosition].reponses[0].id,
      }))
    }
  }

  saveAndResult = () => {
    this.save()
  }

  handleChangeValue = e => {
    const { type, checked, value } = e.target
    if (type === 'checkbox') {
      if (checked) {
        this.setState(prevState => ({
          answerValue: prevState.answerValue.concat(value),
        }))
      } else {
        this.setState(prevState => ({
          answerValue: [
            ...prevState.answerValue.slice(0, prevState.answerValue.indexOf(value)),
            ...prevState.answerValue.slice(prevState.answerValue.indexOf(value) + 1),
          ],
        }))
      }
    } else {
      this.setState({ answerValue: value })
    }
  }

  render() {
    const data = this.state.questions[this.state.questionPosition]

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
                answerValue={this.state.answerValue}
                onChangeValue={this.handleChangeValue}
              />
            </div>
          </fieldset>
        </form>
        <footer>
          {this.state.questionPosition === this.state.questionLastIndex ? (
            <button
              type="button"
              onClick={this.saveAndResult}
            >
              Résultat
            </button>
          ) : (
            <button type="button" onClick={this.saveAndGoTo}>
              Suivant
            </button>
          )}
        </footer>
      </div>
    )
  }
}

export default Home
