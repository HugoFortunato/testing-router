import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Users from './components/Users'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users/:id" element={<Users />} />
    </Routes>
  )

}

export default App;
