import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, result: 1}

  changeImage = () => {
    const {heads, total, tails} = this.state
    const value = Math.floor(Math.random() * 2)
    if (value === 0) {
      this.setState({heads: heads + 1, total: total + 1})
    } else {
      this.setState({tails: tails + 1, total: total + 1})
    }
    this.setState({result: value})
  }

  render() {
    const {result, total, heads, tails} = this.state
    const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    let image
    if (result === 0) {
      image = headImage
    } else {
      image = tailImage
    }
    return (
      <div className="container">
        <div className="scnd-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={image} alt="toss result" className="coin-img" />
          <button type="button" onClick={this.changeImage} className="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
