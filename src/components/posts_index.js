import  React from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {fetchposts} from '../actions/index.js';
class PostsIndex extends React.Component{
  componentWillMount(){// whenever our component is about gto be renderef to the dom
    console.log('Data');
    this.props.fetchposts();
  }
  render(){
   return(

<div>List of Blog posts </div>

   );
  }
}

export default connect(null,{fetchposts})(PostsIndex);
