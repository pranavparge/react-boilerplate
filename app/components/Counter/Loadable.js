/**
 *
 * Asynchronously loads the component for Counter
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
