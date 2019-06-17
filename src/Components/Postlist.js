import React, { Component } from 'react';
import { fetchPost } from '../Actions';
import { connect } from 'react-redux';

class PostList extends Component {
    componentDidMount(){
       this.props.fetchPost()
    }
    render(){
        
        return(
            <div>
                <h1>Post</h1>
            </div>
            
        )
    }
}
export default connect(null, {fetchPost})(PostList);