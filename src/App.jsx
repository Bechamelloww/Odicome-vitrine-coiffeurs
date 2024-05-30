import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import LayoutComponent from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent component={Home}></LayoutComponent>} />
    </Routes>
  );
}

export default App;
