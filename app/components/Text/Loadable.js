/**
 *
 * Asynchronously loads the component for Text
 *
 */
import React from 'react';
import loadable from 'utils/loadable';
import Loading from '../LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <Loading />,
});
