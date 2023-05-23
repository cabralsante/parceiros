import {Routes, Route} from 'react-router-dom';
import Nogueira from '../pages/Nogueira';
import Home from '../pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Nogueira />} />
    </Routes>
  )

}

export default App