import React, { Component } from "react";

class Dd extends Component {
  render() {
    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1>Add Drug</h1>

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

export default Dd;
