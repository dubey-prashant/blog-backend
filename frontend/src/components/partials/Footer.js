import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="Footer">
      <Link to='/create' >Create</Link>
      <Link to='/signup' >Signup</Link>
      <Link to='/signin' >Signin</Link>
    </div>
  )
}

export default Footer