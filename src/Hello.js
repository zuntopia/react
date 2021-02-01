import React from 'react';

function Hello({color, name, isSpecial}) {
  return (
    <div style={{color: color}}>
    { isSpecial ? <b>*</b> : null}
    Hello World
    {name}</div>
  )
}

Hello.defaultProps = {
  color: "blue",
  name: "no name"
}

export default Hello;