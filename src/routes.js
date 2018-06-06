import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import PostsIndex from './components/posts_index';
export default(
   <Route path="/" component={App}>
   <IndexRoute  component={PostsIndex}/>
   </Route>
);
//// Note when we we do simple http://localhost:3000/
///we get both app and postsindex rendered on screen by default
//// note when do http://localhost:3000/greet we get both App and greet rendered on the screen
