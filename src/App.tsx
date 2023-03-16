import './App.css';
import Task from './components/Tasks/Task';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer/>
        <Task/>
      </header>
    </div>
  );
}

export default App;
