import React from 'react';
import loadable from '@loadable/component';
import LidoLoader from 'components/Loader';

export default {
  component: loadable(() => import(/* webpackChunkName: "notFound" */ './NotFound'), {
    fallback: <LidoLoader />,
  }),
};
