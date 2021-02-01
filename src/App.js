// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  const name = "foo";
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="pink" />
      </Wrapper>
      <Hello name="react" color="red"/>
      <div className="App-header"><Hello /></div>
      <Hello />
      <Hello />
      <div>{name}</div>
    </div>
  );
}

export default App;
