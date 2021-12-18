import React from "react";
import { useParams } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArray: [],
      baseArray:[],
    };
  }

  componentDidMount() {
    console.log(this.props.location);
    let newsArray = this.props.location.state.filter(
      (itm) => itm.PUBLISHER == this.props.location.publisher
    );
    this.setState({ newsArray: newsArray, baseArray:  newsArray});
  }

  dateFun = (date) => {
    let ddate = new Date(date);
    let month = (ddate.getMonth() <= 9 ? "0" : "") + ddate.getMonth();
    let newDtae = ddate.getDate() + "/" + month + "/" + ddate.getFullYear();
    return newDtae;
  };

  inputChange = (e) => {
    let val = e.target.value.toLowerCase();
    let result = [];
    console.log(val);
    let data = this.state.baseArray;

    result = data.filter((item) => {
      return item.TITLE.toLowerCase().search(val) != -1;
    });

    this.setState({
      newsArray:result
    })
  };

  render() {
    const news = this.state.newsArray.map((item, i) => (
      <div key={i} className="card">
        <h1>{item.TITLE}</h1>
        <span>
          {"DATE: " + this.dateFun(item.TIMESTAMP)} |{" "}
          {"CATEGORY: " + item.CATEGORY} | {"PUBLISHER: " + item.PUBLISHER} | HOSTNAME: {item.HOSTNAME} | <a href={item.URL}>Read More...</a>
        </span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <input type="text" onChange={(e) => this.inputChange(e)} placeholder="search"/>
        <div className="panel-list">{news}</div>
      </div>
    );
  }
}
