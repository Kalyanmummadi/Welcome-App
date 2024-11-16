// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="head">Welcome</h1>
          <p className="para">Thank you!Happy Learning</p>
          <button
            onClick={this.onSubscribe}
            type="button"
            className="subscribe"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
