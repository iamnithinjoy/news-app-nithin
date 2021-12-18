import React from 'react';
import {
    Link
  } from "react-router-dom";

import Publisher from '../Publisher'; 
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {news: [], publisher:[], active:true, activePublisher:""};
  }

  componentDidMount() {
    this.UserList()
  }

  UserList = () => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then((myJson) => {
        let publ = myJson.map((itm)=> itm.PUBLISHER)
        let uniqPublish = [...new Set(publ)] 
        console.log(uniqPublish);
        this.setState({news: myJson, publisher:uniqPublish});
        
      });
  }
  

  render() {
    const news = this.state.publisher.map((item, i) => (
        <Link to={{pathname:'/publisher/',state:this.state.news, publisher:item}} className="btn btn-primary" key={i}>{item}</Link>
    ));
    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">
          {news}
        </div>
      </div>
    );
  }
}
