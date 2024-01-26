import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';


const Share = lazy(() => import('./components/Share'));

function App() {
  return (
    <Router>
      <h1>Hello React World</h1>
      <Link to="/share/12345">Share</Link>
      <Routes>
      <Route
          path="/share/12345"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Share />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
