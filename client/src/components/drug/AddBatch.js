import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import FormatedTextField from "../common/FormatedTextField";
import FormatedList from "../common/FormatedList";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

class AddBatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandName: "",
      batchNumber: "",
      batchType: "",
      content: "",
      noOfPackages: "",
      noOfItems: "",
      qty: "",
      mfg: "",
      exp: "",
      drugData: [],
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.calTot = this.calTot.bind(this);
  

  onSubmit(e) {
    e.preventDefault();

    const batchData = {
      Brand_name: this.state.brandName,
      Batch_number: this.state.batchNumber,
      Batch_type: this.state.batchType,
      Content: this.state.content,
      No_packages: this.state.noOfPackages,
      No_items: this.state.noOfItems,
      Qty: this.state.qty,
      Mfg: this.state.mfg,
      Exp: this.state.exp
    };
    // Add drug

    axios
      .post("http://localhost:8080/drug/batch", batchData)
      .then(res => {
        console.log(batchData);

        this.setState({
          brandName: "",
          batchNumber: "",
          batchType: "",
          content: "",
          noOfPackages: "",
          noOfItems: "",
          qty: "",
          mfg: "",
          exp: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  calTot(e) {
    const a = this.state.noOfPackages;
    const b = this.state.noOfPackages;
    const tot = a * b;
    return tot;
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 

  //to get the drug data to fill combo
  componentDidMount() {
    axios
      .get("http://localhost:8080/drug/drugs")
      .then(Response => {
        var data = Response.data.data;
        this.setState({
          drugData: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    //brandName options
    const brandOptions = this.state.drugData.map(item => {
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

    //Batch type options
    const batchTypeOptions = [
      { label: "* Select type", value: 0 },
      { label: "Card", value: "Card" },
      { label: "Bottle", value: "Bottle" },
      { label: "Other", value: "Other" }
    ];
    //Content type options
    const contentOptions = [
      { label: "* Select content type", value: 0 },
      { label: "Tablet", value: "Tablet" },
      { label: "Liquid", value: "Liquid" },
      { label: "Other", value: "Other" }
    ];

    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-left">Add Drug</h1>
              <form>
                <FormatedList
                  placeholder="Brand Name"
                  name="brandName"
                  value={this.state.brandName}
                  onChange={this.onChange}
                  options={brandOptions}
                  info="Brand Name"
                />
                <FormatedTextField
                  placeholder="Batch Number"
                  name="batchNumber"
                  value={this.state.batchNumber}
                  onChange={this.onChange}
                  info="Batch Number"
                />
                <FormatedList
                  placeholder="Batch Type"
                  name="batchType"
                  value={this.state.batchType}
                  onChange={this.onChange}
                  options={batchTypeOptions}
                  info="Batch Type"
                />

                <FormatedList
                  placeholder="Content"
                  name="content"
                  value={this.state.content}
                  onChange={this.onChange}
                  options={contentOptions}
                  info="Content"
                />
                <small className="form-text text-muted">Number of packs</small>
                <NumericInput
                  name="noOfPackages"
                  min={1}
                  max={10000}
                  value={this.state.noOfPackages}
                  onChange={this.onChange}
                />
                <small className="form-text text-muted">
                  Number Items per pack
                </small>
                <NumericInput
                  name="noOfItems"
                  min={0}
                  max={100}
                  value={this.state.noOfItems}
                  onChange={this.onChange}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-2"
                  onClick={this.calTot}
                />

                <FormatedTextField
                  placeholder="Total Quantity"
                  name="qty"
                  value={this.state.qty}
                  onChange={this.onChange}
                  info="Total Quantity"
                />
                <small className="form-text text-muted">
                  Manufacturing Date
                </small>
                <DatePicker
                  name="mfg"
                  selected={this.state.mfg}
                  value={this.state.mfg}
                  onChange={this.onChange}
                  info="Mfg"
                />
                <small className="form-text text-muted">
                  Exp Date
                </small>
                <DatePicker
                  name="exp"
                  value={this.state.exp}
                  selected={this.state.exp}
                  onChange={this.onChange}
                  info="Mfg"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                  onClick={this.onSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBatch;
