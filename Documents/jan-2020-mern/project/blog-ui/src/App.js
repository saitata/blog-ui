import React from 'react'
import Home from './Home'
import UsersList from './Userslist'
import PostList from './Postlist'
import UserShow from './Usersshow'
import ShowPost from './Postshow'

import {BrowserRouter,Route,Link} from 'react-router-dom'

function App(props){
    return(
        <BrowserRouter>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
                <Route path='/' component={Home} exact={true}/>
                <Route path='/users' component={UsersList} exact={true}/>
                <Route path='/posts'component={PostList} exact={true} />
                <Route path='/users/:id' component={UserShow}  excat={true}/>
                <Route path='/posts/:id' component={ShowPost}  excat={true}/>
            </div>
        </BrowserRouter>
    )
}
export default App