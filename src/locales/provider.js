import React, { Fragment, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import flatten from 'flat';
import PropTypes from 'prop-types';
import Context from '../context/MyContext';
import messages from './messages';

const Provider = ({ children }) => {
  const { state } = useContext(Context);
  return (
    <IntlProvider
      locale={state.locale}
      textComponent={Fragment}
      messages={flatten(messages[state.locale])}
    >
      {children}
    </IntlProvider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
