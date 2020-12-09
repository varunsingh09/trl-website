import Home from "../components/Home";
import ArticleDetails from "../components/Home/ArticleDetails";


export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/:category/:title/:Id',
    component: ArticleDetails,
    exact: true
  },


];