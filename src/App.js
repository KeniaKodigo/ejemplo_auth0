import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>

        <Profile />
        <Logout />
      </header>
    </div>
  );
}

export default App;
