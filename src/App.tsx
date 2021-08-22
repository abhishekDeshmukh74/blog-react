import './App.css';
import BlogList from './Blog-list';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BlogDetails from './Blog-details';

function App() {
  return (
    <BrowserRouter>
      <div className='App'></div>
      <Switch>
        <Route exact path='/'>
          <BlogList />
        </Route>
        <Route exact path='/blog/:id'>
          <BlogDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
