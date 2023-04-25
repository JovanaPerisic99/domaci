import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import AddPost from './pages/AddPost'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/domaci/" element={<Home />} />
          <Route path="/domaci/addPost" element={<AddPost />} />
          <Route path="/domaci/:postId" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
