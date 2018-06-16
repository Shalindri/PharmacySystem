import React, { Component } from "react";

import FormatedTextField from "../common/FormatedTextField";
import FormatedList from "../common/FormatedList";
import axios from "axios";

class addDrug extends Component {
  constructor(props) {
    super(props);
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
      supplier: "",

      supName: "",
      email: "",
      address: "",
      tele: "",

      displayAddSupForm: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitSup = this.onSubmitSup.bind(this);
    this.addSup = this.addSup.bind(this);
    this.asignTo = this.asignTo.bind(this);
  }
  asignTo(e) {
    e.preventDefault();
    console.log("inside in the asignTo" + this.displayAddSupForm);
    this.setState({
      displayAddSupForm: 1
    });
    console.log("inside in the asignTo" + this.displayAddSupForm);
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
      .post("http://localhost:8080/drug/drugs", drugData)
      .then(res => {
        console.log(drugData);
        this.setState({
          brandName: "",
          genericName: "",
          dosage: "",
          category: "",
          type: "",
          unitPrice: "",
          sellingPrice: "",
          dangerLevel: "",
          reorderLevel: "",
          supplier: "",

          supName: "",
          email: "",
          address: "",
          tele: ""

          //displayAddSupForm: false
        });
        alert("New Drug Added");
      })
      .catch(err => {
        alert("Please Enter details before submitting");
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //when Supplier is not exist
  onSubmitSup(e) {
    e.preventDefault();

    const supData = {
      Supplier: this.state.supName,
      Email: this.state.email,
      Address: this.state.address,
      Tel: this.state.tele
    };
    // Add Sup

    axios
      .post("http://localhost:8080/drug/supplier", supData)
      .then(res => {
        console.log(supData);
        this.setState({ supplier: this.state.supName });
        alert("A new supplier added ");
        this.setState({
          supName: "",
          email: "",
          address: "",
          tele: "",

          displayAddSupForm: false
        });
      })
      .catch(err => {
        alert("Please enter supplier details");
        console.log(err);
      });
  }

  addSup() {
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Add Suppllier</div>
          <div className="card-body">
            <form onSubmit={this.onSubmitSup}>
              <div className="form-group">
                <FormatedTextField
                  placeholder="Supplier Name"
                  name="supName"
                  value={this.state.supName}
                  onChange={this.onChange}
                />
                <FormatedTextField
                  placeholder="E-mail"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <FormatedTextField
                  placeholder="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                />
                <FormatedTextField
                  placeholder="Contact No"
                  name="tele"
                  value={this.state.tele}
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" className="btn btn-dark">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

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

    const type = [
      { label: "* Select type", value: 0 },
      { label: "Tablet", value: "Tablet" },
      { label: "Ointment", value: "Ointment" },
      { label: "Spray", value: "Spray" },
      { label: "Injection", value: "Nausea" },
      { label: "Gel", value: "Gel" },
      { label: "Syrup", value: "Syrup" },
      { label: "Other", value: "Other" }
    ];

    var supForm;
    // if (this.displayAddSupForm) {
    ///  console.log("sup form*******");
    supForm = this.addSup();
    // return supForm;
    // }

    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-left">Add Drug</h1>

              <form onSubmit={this.onSubmit}>
                <FormatedTextField
                  info="Brand Name"
                  placeholder="Brand Name"
                  name="brandName"
                  value={this.state.brandName}
                  onChange={this.onChange}
                />
                <FormatedTextField
                  placeholder="Generic Name"
                  name="genericName"
                  value={this.state.genericName}
                  onChange={this.onChange}
                  info="Generic Name"
                />
                <FormatedTextField
                  placeholder="Dosage"
                  name="dosage"
                  value={this.state.dosage}
                  onChange={this.onChange}
                  info="Dosage"
                />
                <FormatedList
                  placeholder="Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  options={options}
                  info="Drug Category"
                />
                <FormatedList
                  placeholder="Type"
                  name="type"
                  value={this.state.type}
                  onChange={this.onChange}
                  options={type}
                  info="Drug Type"
                />

                <FormatedTextField
                  placeholder="Unit price"
                  name="unitPrice"
                  value={this.state.unitPrice}
                  onChange={this.onChange}
                  info="Unit Price"
                />
                <FormatedTextField
                  placeholder="Selling price"
                  name="sellingPrice"
                  value={this.state.sellingPrice}
                  onChange={this.onChange}
                  info="Selling Price"
                />
                <FormatedTextField
                  placeholder="Danger Level"
                  name="dangerLevel"
                  value={this.state.dangerLevel}
                  onChange={this.onChange}
                  info="Danger Level"
                />
                <FormatedTextField
                  placeholder="Reorder Level"
                  name="reorderLevel"
                  value={this.state.reorderLevel}
                  onChange={this.onChange}
                  info="Reorder Level"
                />
                <FormatedTextField
                  placeholder="Supplier"
                  name="supplier"
                  value={this.state.supplier}
                  onChange={this.onChange}
                  info="Supplier"
                />
                {supForm}

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                  //onClick={this.onSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addDrug;
