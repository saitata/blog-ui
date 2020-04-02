import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class PostList extends React.Component{
    constructor(){
        super()
        this.state={
            postList:[]
        }
    }

componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        //console.log(response.data)
        const postList=response.data
        this.setState({postList})
    })

}
 render() {
     return (
         <div> 
             <h2>Total Posts-{this.state.postList.length} </h2>
             <ul>
                 {this.state.postList.map(post=>{
                     return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li> 
                 })}
             </ul>
          </div> 
     )
 }
}

export default PostList