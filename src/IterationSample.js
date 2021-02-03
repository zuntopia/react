import React, { useState } from 'react';

const IterationSample = () => {

  // let numbers = [1, 2, 3, 4, 5];
  const [names, setNames] = useState([
    {'id': 1, text: "hello"},
    {'id': 2, text: "world"},
    {'id': 3, text: "foo"},
    {'id': 4, text: "bar"},
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const processed = names.map(name => (<li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>));
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
      }
    );
    setNextId(nextId+1);
    setNames(nextNames);
    setInputText('');
  }
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }
  return (
    <>
    <ul>{processed}</ul>
    <input value={inputText} onChange={onChange} />
    <button onClick={onClick}>Add </button>

    </>
  )
}

export default IterationSample;