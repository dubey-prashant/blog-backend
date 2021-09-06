import { useState } from "react"
import { useHistory } from "react-router"

const SignIn = () => {
  const history = useHistory()
  const [error, setError] = useState()


  const handleSignIn = (e) => {
    e.preventDefault()

    const userData = {
      email: e.target.email.value,
      password: e.target.pass.value
    }

    fetch('/auth/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    }).then(res => {
      if (res.ok) {
        return res.text()
      } else {
        throw new Error(`couldn't reach there`)
      }
    }).then(data => {
      if (data === `signed in`) {
        alert(data)
        history.push('/')
      } else {
        throw new Error(data)
      }
    }).catch(err => {
      setError(err.message)
    })

  }

  return (
    <div className="SignIn">
      { error && <div>{error}</div>}

      <form onSubmit={handleSignIn} method="post">
        <label>Email:</label>
        <input name='email' type="email" />
        <label>Password:</label>
        <input name='pass' type="password" />
        <button className="btn">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn;