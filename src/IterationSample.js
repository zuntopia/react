import React from 'react';

const IterationSample = () => {

  let numbers = [1, 2, 3, 4, 5];
  const processed = numbers.map(name => <li key={name}>{name*name}</li>);
  return (
    <ul>{processed}</ul>
  )
}

export default IterationSample;