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
          <Route path="/" element={<Home />} />
          <Route path="/addPost" exact element={<AddPost />} />
          <Route path="/:postId" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
