import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import SidebarD from "./components/Layout/SidebarD";
import AddBatch from "./components/drug/AddBatch";
import AddDrug from "./components/drug/AddDrug";
import ViewDrugs from "./components/drug/ViewDrugs";
import ViewBatch from "./components/drug/ViewBatch";

import SidebarI from "./components/Layout/sidebar_issue";
import Issue from "./Issue";
import ViewPres from "./components/viewPres";
import ViewDrugsI from "./components/viewDrugs";

import SidebarE from "./components/Layout/SidebarE";
import DApp from "./DutyApp";
import EApp from "./EmpRegApp";
import VApp from "./ViewApp";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />

      <Route
        exact
        path="/addDrug"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarD />
                </div>
                <div className="col-md-8">
                  <AddDrug />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />

      <Route
        exact
        path="/addBatch"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarD />
                </div>
                <div className="col-md-8">
                  <AddBatch />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
      <Route
        exact
        path="/viewDrug"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarD />
                </div>
                <div className="col-md-8">
                  <ViewDrugs />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
      <Route
        exact
        path="/viewBatch"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarD />
                </div>
                <div className="col-md-8">
                  <ViewBatch />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />

      <Route
        exact
        path="/issue"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarI />
                  <div className="profile-img">
                    <img src={require("./img/drug1.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <Issue />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
      <Route
        exact
        path="/viewIssued"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarI />
                  <div className="profile-img">
                    <img src={require("./img/drug2.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <ViewDrugsI />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
      <Route
        exact
        path="/viewPress"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarI />
                  <div className="profile-img">
                    <img src={require("./img/pres2.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <ViewPres />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />

      <Route
        exact
        path="/vapp"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarE />
                </div>
                <div className="col-md-8">
                  <VApp />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
      <Route
        exact
        path="/eapp"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarE />
                </div>
                <div className="col-md-8">
                  <EApp />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
      <Route
        exact
        path="/dapp"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <SidebarE />
                </div>
                <div className="col-md-8">
                  <DApp />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
