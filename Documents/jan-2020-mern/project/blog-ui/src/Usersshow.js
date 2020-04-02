import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component {
    constructor(){
        super()
        this.state={
            user:[],
            title:[]
        }
    }
   componentDidMount(){
       const id=this.props.match.params.id 
    axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        //console.log(response.data)
        const user=response.data
        this.setState({user})
     })
     
     axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
     .then((response=>{
         const title=response.data
        this.setState({title})
     }))
   }
    render() {
       
        return (
            <div> 
                <h2>User Name:{this.state.user.name}</h2>
                <h2>Posts Writen by User</h2>
                <ul>{
                    this.state.title.map(post=>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
                </ul>
                
            </div> 
        )
    }
}

export default UserShow