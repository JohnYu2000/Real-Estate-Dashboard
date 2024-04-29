import './App.css';
import { Signin } from './features/Signin'


function App() {
  return (
    <div style={{
      "display": "flex",
      "width": "100vw",
      "height": "100vh"
    }}>
      <Signin />
    </div>
  );
}

export default App;