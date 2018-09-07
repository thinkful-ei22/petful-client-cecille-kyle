import React from 'react';
import { connect } from 'react-redux';

import { fetchCat, fetchDog } from './actions/index.js';
import Pet from './components/Pet';

export class Dashboard extends React.Component {

  // cat = this.props.catToAdopt;
  // dog = this.props.dogToAdopt;

  componentDidMount() {
    console.log('Dashboard mounted');
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptPet(e) {
    e.preventDefault();
    console.log('pet adopted!');
    console.log(e);
  }

  render() {

    if (this.props.loading) {
      return (<h1>Loading...</h1>);
    }

    if (this.props.error) {
      return (<h1>Error!</h1>);
    }

    if (this.props.catToAdopt && this.props.dogToAdopt) {
      return (
        <div className='dashboard'>
          <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={this.onAdoptPet} />
          <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={this.onAdoptPet} />
        </div>
      );
    } else {
      return (<h1>not there yet...</h1>);
    }
  }
}

const mapStateToProps = (state, props) => ({
  error: state.cat.error || state.dog.error,
  loading: state.cat.loading || state.dog.loading,
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
});

export default connect(mapStateToProps)(Dashboard);