import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class ShowPost extends React.Component{
    constructor(){
        super()
        this.state={
            users:{},
            show:{},
            comments:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id 
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{ 
            //console.log(response.data)
            const show=response.data
            const id1=show.userId
           this.setState({show})
           axios.get(`https://jsonplaceholder.typicode.com/users/${id1}`)
           .then((response)=>{
               //console.log(response.data)        
               const users=response.data
               this.setState({users})
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments=response.data
           this.setState({comments})
        })

    }
    render(){
        return(
            <div>
                <h2>UserName-{this.state.users.name}</h2>
                <h2>Title:{this.state.show.title}</h2>
                <h2>Body:{this.state.show.body}</h2>
                <hr/>
                <h2>Comments:</h2>
                <ul>
                    {
                        this.state.comments.map(comment=>{
                        return<li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
                <hr/>
                <h2><Link to={`/users/${this.state.users.id}`}>More posts Authors:{this.state.users.name}</Link></h2>
            </div>
        )
    }
}
export default ShowPost