import React from 'react';
import { connect } from 'react-redux';

import { fetchCat, fetchDog, adoptCat, adoptDog } from './actions/index.js';
import Pet from './components/Pet';

export class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.onAdoptPet = this.onAdoptPet.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptPet(animal) {
    if (animal === 'cat') {
      this.props.dispatch(adoptCat());
    }
    if (animal === 'dog') {
      this.props.dispatch(adoptDog());
    }
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
          <Pet petToAdopt={this.props.catToAdopt} animal='cat' onAdoptPet={this.onAdoptPet} />
          <Pet petToAdopt={this.props.dogToAdopt} animal='dog' onAdoptPet={this.onAdoptPet} />
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