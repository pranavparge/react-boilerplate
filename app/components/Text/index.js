/**
 *
 * Text
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Text(props) {
  return <h2>{JSON.stringify(props.data)}</h2>;
}

Text.propTypes = {
  data: PropTypes.object,
};

export default memo(Text);
