import * as React from 'react';
import * as PropTypes from 'prop-types';

export const ToolHeader = props => <header>
  <h1>{props.headerText}</h1>
</header>;

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired
};