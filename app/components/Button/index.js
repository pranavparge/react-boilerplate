/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Button(props) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(Button);
