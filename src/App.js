import './App.css';
import Header from './Component/Header/Header';
import Store from './Component/Store/Store';
import Theory from './Component/Theory/Theory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='normal-header'>Choose Your Dream Product</h1>
      <Store></Store>
      <Theory></Theory>
    </div>
  );
}

export default App;
