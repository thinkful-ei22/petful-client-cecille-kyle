import React from 'react';

export default function Dashboard(props) {
  const cat = props.catToAdopt;
  const dog = props.dogToAdopt;

  return (
    <div className='dashboard'>
      <section className='cat'>
        <header>
          <h1>{cat.name}</h1>
          <img src={cat.imageURL} alt={cat.imageDescription} />
        </header>
        <main>
          <h2>More about {cat.name}</h2>
          <dl>
            <dt>Sex:</dt>
            <dd>{cat.sex}</dd>
            <dt>Age:</dt>
            <dd>{cat.age}</dd>
            <dt>Breed:</dt>
            <dd>{cat.breed}</dd>
            <dt>Story:</dt>
            <dd>{cat.story}</dd>
          </dl>
          <button>Adopt</button>
        </main>
      </section>
      <section className='dog'>
        <header>
          <h1>{dog.name}</h1>
          <img src={dog.imageURL} alt={dog.imageDescription} />
        </header>
        <main>
          <h2>More about {dog.name}</h2>
          <dl>
            <dt>Sex:</dt>
            <dd>{dog.sex}</dd>
            <dt>Age:</dt>
            <dd>{dog.age}</dd>
            <dt>Breed:</dt>
            <dd>{dog.breed}</dd>
            <dt>Story:</dt>
            <dd>{dog.story}</dd>
          </dl>
          <button>Adopt</button>
        </main>
      </section>
    </div>
  );
}