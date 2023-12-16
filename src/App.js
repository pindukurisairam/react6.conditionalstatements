import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  /*using if-else statement 
    renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }*/

  render() {
    /* using element variables
    const {isLoggedIn} = this.state
    let authButton

    if (isLoggedIn === true) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }*/

    {/*we write this line while using the ternary operators => const {isLoggedIn} = this.state */}
     {/* we can use logic and operator => const {isLoggedIn} = this.state /*}
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {/*we can write the using if-else statement {this.renderAuthButton()}*/}
        {/*we can write using the elements variables in the authButton line {authButton} */}
        {/* we can use the ternary operator{isLoggedIn ? <button>Logout</button> : <button>Login</button> or we can login button place we write null means in output nothing will show} /*}
        {/*we can write logic and operator =>
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>} */}

      </div>
    )
  }
}

export default App
