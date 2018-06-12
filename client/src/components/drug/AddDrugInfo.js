import React, { Component } from "react";

import ReactDOM from "react-dom";

//import TextFieldGroup from "../common/TextFieldGroup";
//import SelectListGroup from "../common/SelectListGroup";
import axios from "axios";

class addDrugInfo extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.setbrandName = this.setbrandName.bind(this);
    this.setgenericName = this.setgenericName.bind(this);
    this.setdosage = this.setdosage.bind(this);
    this.setcategory = this.setcategory.bind(this);
    this.settype = this.settype.bind(this);
    this.setunitPrice = this.setunitPrice.bind(this);
    this.setsellingPrice = this.setsellingPrice.bind(this);
    this.setdangerLevel = this.setdangerLevel.bind(this);
    this.setreorderLevel = this.setreorderLevel.bind(this);

    this.state = {
      brandName: "",
      genericName: "",
      dosage: "",
      category: "",
      type: "",
      unitPrice: "",
      sellingPrice: "",
      dangerLevel: "",
      reorderLevel: "",
      supplier: ""
    };
  }

  setbrandName(e) {
    this.setState({ brandName: e.target.value });
  }
  setgenericName(e) {
    this.setState({ genericName: e.target.value });
  }
  setdosage(e) {
    this.setState({ dosage: e.target.value });
  }
  setcategory(e) {
    this.setState({ category: e.target.value });
  }
  settype(e) {
    this.setState({ type: e.target.value });
  }
  setunitPrice(e) {
    this.setState({ unitPrice: e.target.value });
  }
  setsellingPrice(e) {
    this.setState({ sellingPrice: e.target.value });
  }
  setdangerLevel(e) {
    this.setState({ dangerLevel: e.target.value });
  }
  setreorderLevel(e) {
    this.setState({ reorderLevel: e.target.value });
  }
  setsupplier(e) {
    this.setState({ supplier: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const drugData = {
      Brand_name: this.state.brandName,
      Generic_name: this.state.genericName,
      Dosage: this.state.dosage,
      Category: this.state.category,
      Type: this.state.type,
      Unit_price: this.state.unitPrice,
      Selling_price: this.state.sellingPrice,
      Danger_level: this.state.dangerLevel,
      Reorder_level: this.state.reorderLevel,
      Supplier: this.state.supplier
    };
    // Add drug

    axios
      .post("http://localhost:8080/drug", drugData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // onChange(e) {
  // this.setState({ [e.target.name]: e.target.value });
  // }

  render() {
    const options = [
      { label: "* Select category", value: 0 },
      { label: "headache", value: "headache" },
      { label: "cold & flu", value: "cold & flu" },
      { label: "Allergic", value: "Allergic" },
      { label: "Nausea", value: "Nausea" },
      { label: "Diarrhoea", value: "Diarrhoea" },
      { label: "Rashes", value: "Rashes" },
      { label: "Sore throat", value: "Sore throat" },
      { label: "Other", value: "Other" }
    ];
    // Select options for drug type

    const types = [
      { label: "* Select type", value: 0 },
      { label: "Tablet", value: "Tablet" },
      { label: "Ointment", value: "Ointment" },
      { label: "Spray", value: "Spray" },
      { label: "Injection", value: "Nausea" },
      { label: "Gel", value: "Gel" },
      { label: "Syrup", value: "Syrup" },
      { label: "Other", value: "Other" }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Drug</h1>

              <form>
                <div className="form-group">
                  <label>Brand Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    onChange={this.setbrandName}
                  />
                </div>
                <div className="form-group">
                  <label>Generic Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    onChange={this.setgenericName}
                  />
                </div>

                <div className="form-group">
                  <label>Dosage</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    onChange={this.setdosage}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control" onChange={this.setcategory}>
                    {options}
                  </select>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select classtype="form-control" onChange={this.settype}>
                    {types}
                  </select>
                </div>

                <div className="form-group">
                  <label>Unit price</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    onChange={this.setunitPrice}
                  />
                </div>
                <div className="form-group">
                  <label>Selling Price</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    onChange={this.setsellingPrice}
                  />
                </div>
                <div className="form-group">
                  <label>Danger Level</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    onChange={this.setdangerLevel}
                  />
                </div>
                <div className="form-group">
                  <label>Reorder Level</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    onChange={this.setreorderLevel}
                  />
                </div>
                <div className="form-group">
                  <label>Supplier</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    onChange={this.setsupplier}
                  />
                </div>

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

export default addDrugInfo;
