import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import './postnew.css';
 class Postsnew extends React.Component{
  render(){
    return(
        <form>
        <div className="form-group">
        <label>Title </label>
        <input type="text" className="form-control"/>
        </div>

        <div className="form-group">
        <label>Categories </label>
        <input type="text" className="form-control"/>
        </div>

        <div className="form-group">
        <label>Content</label>
        <textarea className="form-control"/>
        </div>
        <button type="submit" className="btn-submit"> Submit</button>
        </form>
    );
  }
}
export default reduxForm({
  form:'PostsNewForm',
  fields:['title','categories','content']
})(Postsnew);
