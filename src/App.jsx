import './styles/App.scss';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AddPost from './pages/AddPost';
import Footer from './components/layout/Footer';
import PostsPage from './pages/PostsPage';

export default function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route
          path='*'
          element={
            <div className='container'>
              <h2>404</h2>
              <p>not found</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
