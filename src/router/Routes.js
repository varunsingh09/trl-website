import Home from "../components/Home";
import Category from "../components/Home/Category";
import ArticleDetails from "../components/Home/ArticleDetails";


export default [
  {
    path: '/',
    exact: true,
    component: Home,

  },
  {
    path: '/:categoryId',
    exact: true,
    component: Category

  },

  {
    path: '/:category/:title/:Id',
    exact: true,
    component: ArticleDetails

  },

];