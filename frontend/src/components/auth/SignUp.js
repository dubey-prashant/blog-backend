import { useState } from "react"
import { useHistory } from "react-router"

const SignUp = () => {
  const history = useHistory()
  const [error, setError] = useState()
  const handleSignUp = (e) => {
    e.preventDefault()

    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.pass.value
    }

    fetch('/auth/register', {
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
      if (data === `registered`) {
        alert(`registered`)
        history.push('/')
      } else {
        throw new Error(data)
      }
    }).catch(err => {
      setError(err.message)
    })
  }


  return (
    <div className="SignUp">

      { error && <div>{error}</div>}

      <form onSubmit={handleSignUp} method="post">
        <label>Name:</label>
        <input name='name' type="text" />
        <label>Email:</label>
        <input name='email' type="email" />
        <label>Password:</label>
        <input name='pass' type="password" />
        <button className="btn">Sign Up</button>

        <div className="google">
          <button><a href='/auth/google'>Google</a></button>
        </div>
      </form>
    </div>
  )
}

export default SignUp