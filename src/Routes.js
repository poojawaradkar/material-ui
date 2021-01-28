import Album from 'components/Album';
import NotFound from 'components/NotFound';

const routes = [
  {
    ...Album,
    path: '/',
    exact: true,
  },
  {
    ...NotFound,
  },
];

export default routes;
