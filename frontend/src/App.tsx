import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

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

        <Route path="/register" element={
          <Layout>
            <Register/>
          </Layout>
        } 
        />

        <Route 
          path="/sign-in"
          element = {
            <Layout>
              <SignIn />
            </Layout>
          }
         />

      </Routes>
    </Router>
  );
};

export default App
