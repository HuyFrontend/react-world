import React, { Component } from 'react';
import AddCountry from './AddCountry';
import CountryList from './CountryList';
import DoneCountryList from './DoneCountryList';

// import { UIRouter, UIView } from '@uirouter/react';
// import { states, plugins } from './App-Routing';

class ManageCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [
        {name: 'Viet', edit: false, done: false},
        {name: 'Thai', edit: false, done: false},
        {name: 'Cam', edit: false, done: false},
      ],
      country: ''
    };
  }

  countryChange = (e) => {
    this.setState({
      country: e.target.value
    });
  }

  addCountry = (country) => {
    this.setState({
      countries: this.state.countries.concat({
        name: country,
        edit: false,
        done: false
      })
    });
  }

  doneCountry= (country) => {
    this.setState({
      countries: this.state.countries.reduce((container, c) => {
        if(c.name === country) {
          c.done = true
        }
        return container.concat(c)
      }, [])
    });
  }

  editCountry = (country) => {
    this.setState({
      countries: this.state.countries.reduce((container, c) => {
        if(c.name === country) {
          c.edit = true
        }
        return container.concat(c)
      }, [])
    });
  }

  saveCountry = (country, newCountry) => {
    this.setState({
      countries: this.state.countries.reduce((container, c) => {
        if(c.name === country) {
          c.edit = false
          c.name = newCountry
        }
        return container.concat(c)
      }, [])
    });
  }

  deleteCountry = (country) => {
    this.setState({
      countries: this.state.countries.filter((c) => {
        return c.name !== country
      })
    })
  }

  render() {
    return (
        <div className="manage-countries">
            <h1>Travel Bucket List</h1>
            <AddCountry addCountry={this.addCountry} countryChange={this.countryChange} country={this.state.country} />
            <CountryList
            countries={this.state.countries}
            doneCountry={this.doneCountry}
            editCountry={this.editCountry}
            saveCountry={this.saveCountry}
            deleteCountry={this.deleteCountry}
            />
            <DoneCountryList countries={this.state.countries} />
        </div>
    )
  }
}

export default ManageCountry;
