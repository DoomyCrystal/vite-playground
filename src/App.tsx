import { Outlet, Router } from '@tanstack/react-location'
import './App.css'
import { location, routes } from './Routes'

function App() {
  return (
    <Router routes={routes} location={location}>
      <div className="App">
        <Outlet />
      </div>
    </Router>
  )
}

export default App
