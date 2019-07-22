import React from 'react';
import { Route } from 'react-router-dom';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog1 from './components/Blogs/Blog/Blog1/Blog1';
import Blog2 from './components/Blogs/Blog/Blog2/Blog2';
import Blogs from './components/Blogs/Blogs';
import './App.css';

function App() {
  return (
    <main>
        <NavigationItems />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog1' component={Blog1} />
        <Route path='/blog2' component={Blog2} />
        <Route path='/blogs' component={Blogs} />
    </main>
  );
}

export default App;
