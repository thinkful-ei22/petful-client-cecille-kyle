import React from 'react';
import Pet from './components/Pet';

export default function Dashboard(props) {
  const cat = props.catToAdopt;
  const dog = props.dogToAdopt;

  const onAdoptPet = (e) => {
    e.preventDefault();
    console.log('pet adopted!');
    console.log(e);
  }

  return (
    <div className='dashboard'>
      <Pet petToAdopt={cat} onAdoptPet={onAdoptPet} />
      <Pet petToAdopt={dog} onAdoptPet={onAdoptPet} />
    </div>
  );
}