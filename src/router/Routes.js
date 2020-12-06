import Home from "../components/Home";
import Countries from "../components/Countries";
import Country from "../components/Country";
import CityDetails from "../components/Countries/CityDetails";


export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/countries',
    component: Countries,
    exact: true
  },
  {
    path: '/admin/cityDetails',
    component: CityDetails,
    exact: true
  },
  {
    path: '/:name',
    component: Country,
    exact: true
  },

];