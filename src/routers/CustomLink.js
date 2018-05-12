import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Router.css';

const CustomLink = () => (
  <Router>
    <div className="custom-link">
      <h3>Topic: Router Custom Link</h3>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/customer" label="Customer Detail Link" />
      <OldSchoolMenuLink to="/list" label="Customer List Link" />
      <hr />
      <Route exact path="/customer" component={CustomerDetail} />
      <Route path="/list" component={CustomerList} />
    </div>
  </Router>
);


const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? `active` : ""}>
        <p> {JSON.stringify(match)} </p>
        { match ? <span>Active: </span> : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

const CustomerDetail = () => (
  <div>
    <h2>Customer Profile</h2>
    <div>
      <p>Name: Harry Vo</p>
      <p>Address: Petalz Residences, Kuala Lumpur, Malaysia</p>
      <p>Phone: +60 17 264 2108</p>
      <p>Email: Huyvoxuan@hotmail.com</p>
    </div>
  </div>
);

const CustomerList = () => (
  <div>
    <h2>Customer List</h2>
    <div>
      <p>1: Harry Vo</p>
      <p>2: Magareth</p>
      <p>3: Lints</p>
      <p>4: Tomy</p>
    </div>
  </div>
);

export default CustomLink;