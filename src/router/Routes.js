import Countries from "../components/Countries";
import Country from "../components/Country";
import CityDetails from "../components/Countries/CityDetails";


export default [
  {
    path: '/',
    component: Countries,
    exact: true
  },
    {
    path: '/cityDetails',
    component: CityDetails,
    exact: true
  },
  {
    path: '/:name',
    component: Country,
    exact: true
  },

];