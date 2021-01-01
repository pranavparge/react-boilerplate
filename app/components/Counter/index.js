/**
 *
 * Counter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Counter(props) {
  return (
    <h1>
      <FormattedMessage {...messages.header} /> : {props.count}
    </h1>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
};

export default memo(Counter);
