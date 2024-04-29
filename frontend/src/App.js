import './App.css';
import { Signin } from './features/Signin'


function App() {
  return (
    <body style={{
      "display": "flex",
      "width": "100vw",
      "height": "100vh"
    }}>
      <Signin />
    </body>
  );
}

export default App;