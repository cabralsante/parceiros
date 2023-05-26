import {Routes, Route} from 'react-router-dom';
import Nogueira from '../pages/Nogueira';
import Home from '../pages/Home';
import Personal from '../pages/Personal';
import Ultra from '../pages/Ultra';
import QPilates from '../pages/QPilates';
import FabiaRoberta from '../pages/FabiaRoberta';
import CiecPE from '../pages/CiecPE';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nogueira" element={<Nogueira />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/ultrafitness" element={<Ultra />} />
      <Route path="/qpilates" element={<QPilates />} />
      <Route path="/fabiaroberta" element={<FabiaRoberta />} />
      <Route path="/ciecpe" element={<CiecPE />} />
    </Routes>
  )

}

export default App