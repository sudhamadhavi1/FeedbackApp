// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
changeContainer=()=>{
    this.setState({
        return(
        <div>
            <p>Thank you for your Feedback</p>
        </div>
    )
    })
}


  render() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="app-container">
        <div className="feedback-container">
          <h1>How satisfied are you with our customer support Performance?</h1>
          <ul className="emijos-container">
            {emojis.map(each => (
              <li className="each-emijo">
                <button type="button" className="btn-style" onClick={changeContainer}>
                  <img
                    src={each.imageUrl}
                    alt={each.name}
                    className="emijo-image"
                  />
                </button>
                <p>{each.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
