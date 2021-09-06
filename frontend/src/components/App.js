import '../css/main.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import Notfound from './partials/Notfound'
import HomePage from './HomePage'
// Article components
import FullArticle from './articles/ViewArticle'
import CreatePost from './articles/CreateArticle'
import UpdatePost from './articles/UpdateArticle'
// Auth components
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'

function App() {

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/' >
          <HomePage />
        </Route>
        <Route exact path='/article/:id' >
          <FullArticle />
        </Route>
        <Route exact path='/create' >
          <CreatePost />
        </Route>
        <Route exact path='/update/:id' >
          <UpdatePost />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>

        {/* Notfound must be at last declare all routes above this */}
        <Route path='*' >
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App