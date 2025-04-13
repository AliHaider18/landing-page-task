import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';

import { Toaster } from 'sonner';


// Routes configuration
const routes = [
  { path: '/', element: <Landing /> },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      <Toaster position="top-right" />
    </Router>
  )
}

export default App
