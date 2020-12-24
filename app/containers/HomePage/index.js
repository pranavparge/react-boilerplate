/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    fetch('/').then(data => data.json().then(resp => console.log(resp)));
  }, []);

  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
