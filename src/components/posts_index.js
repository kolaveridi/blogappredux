import  React from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {fetchposts} from '../actions/index.js';
import {Link} from 'react-router';
class PostsIndex extends React.Component{
  componentWillMount(){// whenever our component is about gto be renderef to the dom
    console.log('Data');
    this.props.fetchposts();
  }
  render(){
   return(
     <div className="text-xs-right">
     <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
      <div>List of Blog posts </div>
      </div>

   );
  }
}

export default connect(null,{fetchposts})(PostsIndex);
