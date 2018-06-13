import React, { Component } from "react";
import axios from "axios";
import FormatedList from "../common/FormatedList";

class FilterDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/drug/drugs")
      .then(Response => {
        var data = Response.data.data;
        this.setState({
          data: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  //{ label: "headache", value: "headache" },
  render() {
    const brandName = this.state.data.map(item => {
      return {
        label:
          item.Brand_name +
          "     " +
          item.Type +
          "     ( " +
          item.Dosage +
          " ) ",
        value: item.Brand_name
      };
    });

    return ere;
  }
}
export default FilterDropDown;
