import React, { Component } from 'react';
import { fetchPost } from '../Actions';
import { connect } from 'react-redux';

class PostList extends Component {
    componentDidMount(){
       this.props.fetchPost()
    }
    render(){
        console.log(this.props.post)
        return(
            <div>
                <h1>Post</h1>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {post : state.posts}
}
export default connect(mapStateToProps, {fetchPost})(PostList);