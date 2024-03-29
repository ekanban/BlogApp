import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router";

import {fetchPosts} from "../actions/index.js";


class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }


  render(){

    const renderPosts = this.props.posts.map((post) => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {renderPosts}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return({
    posts: state.posts.all
  })
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts: fetchPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
