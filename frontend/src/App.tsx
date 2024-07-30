import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';

const App = () => {
  return (
    <Router>
      <Routes>

          <Route path="/" element={
            <Layout>
            <p>Home Page</p>
          </Layout>
        } 
        />

        {/* dynamic parts with fixed contents of a page  - same component*/}

        <Route path="/search" element={
            <Layout>
            <p>Search Page</p>
          </Layout>
        } 
        />
      </Routes>
    </Router>
  );
};

export default App
