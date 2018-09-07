import React from 'react';

export default function Pet(props) {
  const pet = props.petToAdopt;

  return (
    <section className='pet'>
      <header>
        <h1>{pet.name}</h1>
        <img src={pet.imageURL} alt={pet.imageDescription} />
      </header>
      <main>
        <h2>More about {pet.name}</h2>
        <dl>
          <dt>Sex:</dt>
          <dd>{pet.sex}</dd>
          <dt>Age:</dt>
          <dd>{pet.age}</dd>
          <dt>Breed:</dt>
          <dd>{pet.breed}</dd>
          <dt>Story:</dt>
          <dd>{pet.story}</dd>
        </dl>
        <button onClick={(e) => props.onAdoptPet(e)} >Adopt</button>
      </main>
    </section>
  );
}