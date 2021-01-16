import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import App from './App';

export default [{
  ...App,
  routes: [
    {
      ...Home,
      path: '/',
      exact: true,
    },
    {
      ...Article,
      path: '/:category/:title/:Id',
      exact: true,
    }, {
      ...Category,
      path: '/:categoryId',
      exact: true,
    }, {
      ...NotFound,
    },
  ],
}];
