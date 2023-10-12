import './App.css';
import SignUp from './Components/User/SignUp'
import Login from './Components/User/Login';

function App() {
  return (
    <div>
      <header className="App-header">
        <SignUp/>
        <Login/>
      </header>
    </div>
  );
}

export default App;
