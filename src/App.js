import Share from './components/Share';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>Hello React World</h1>
      <Link to="/share/12345">Share</Link>
      <Routes>
        <Route path="/share/12345" element={<Share />} />
      </Routes>
    </Router>
  )
}

export default App
